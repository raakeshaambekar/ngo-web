import clientPromise from "./mongodb";

export async function getPrograms() {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("programs")
    .find({ published: true })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function getProgramBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db();

  return db.collection("programs").findOne({ slug, published: true });
}