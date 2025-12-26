import clientPromise from "./mongodb";

export async function getNews() {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("news")
    .find({ published: true })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function getNewsBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db();

  return db.collection("news").findOne({ slug, published: true });
}