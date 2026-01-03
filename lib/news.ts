import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
export const runtime = "nodejs"

export async function getNews(isAdmin=false) {
  const client = await clientPromise;
  const db = client.db("mdmds");

  if(isAdmin == true){
     return db
    .collection("news")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  }else{
    return db
    .collection("news")
    .find({ status: "published", active: true })
    .sort({ createdAt: -1 })
    .toArray();
  }
 
}

export async function getNewsBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db("mdmds");

  return db.collection("news").findOne({ 
    slug,
    status: "published",
    active: true
  });
}


export async function createNews(data: any) {
  const client = await clientPromise;
  const db = client.db();

  return db.collection("news").insertOne({
    ...data,
    status: data.status || "draft",
    active: data.active ?? true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function updateNews(id: string, data: any) {
  const client = await clientPromise;
  const db = client.db();
  const { _id, ...safeData } = data;

  return db.collection("news").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...safeData,
        updatedAt: new Date(),
      },
    }
  );
}
export async function getNewsById(id: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("news")
    .findOne({ _id: new ObjectId(id) });
}
