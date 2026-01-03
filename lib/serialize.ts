export function serializeDoc(doc: any) {
  if (!doc) return null;

  return {
    ...doc,
    _id: doc._id?.toString?.() ?? doc._id,
    createdAt:
      doc.createdAt instanceof Date
        ? doc.createdAt.toISOString()
        : doc.createdAt ?? null,
    updatedAt:
      doc.updatedAt instanceof Date
        ? doc.updatedAt.toISOString()
        : doc.updatedAt ?? null,
  };
}

