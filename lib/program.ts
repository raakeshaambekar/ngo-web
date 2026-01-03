import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export async function getPrograms(isAdmin=false) {
  const client = await clientPromise;
  const db = client.db("mdmds");
  if(isAdmin == true){
    return db
    .collection("programs")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  }else{
    return db
    .collection("programs")
    .find({ status: "published", active: true })
    .sort({ createdAt: -1 })
    .toArray();
  }
  
}

export async function getProgramBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db("mdmds");

  return db.collection("programs").findOne({ 
    slug,
    status: "published",
    active: true
  });
}

export async function createProgram(data: any) {
  const client = await clientPromise;
  const db = client.db();

  return db.collection("programs").insertOne({
    ...data,
    status: data.status || "draft",
    active: data.active ?? true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function updateProgram(id: string, data: any) {
  const client = await clientPromise;
  const db = client.db();


  const { _id, ...safeData } = data;

  return db.collection("programs").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...safeData,
        updatedAt: new Date(),
      },
    }
  );
}

export async function getProgramById(id: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("programs")
    .findOne({ _id: new ObjectId(id) });
}