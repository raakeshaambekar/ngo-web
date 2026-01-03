"use client";

import Link from "next/link";

export default function ProgramList({ programs }: any) {
  async function handleDelete(id: string) {
    const ok = confirm(
      "Are you sure you want to delete this program?"
    );

    if (!ok) return;

    await fetch(`/api/admin/programs/${id}`, {
      method: "DELETE",
    });

    window.location.reload();
  }

  return (
    <div className="space-y-3">
      {programs.map((p: any) => (
        <div
          key={p._id}
          className="grid grid-cols-12 gap-4 border rounded p-4 items-center"
        >
          <div className="col-span-6">
            <p className="font-semibold">{p.title.en}</p>
            <p className="text-sm text-gray-500">{p.slug}</p>
          </div>
           <div className="col-span-3">
            <span
              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                p.status === "published"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {p.status}
            </span>
          </div>

          <div className="col-span-3 flex gap-4 justify-end">
            <Link
              href={`/admin/programs/${p._id}`}
              className="text-blue-600"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(p._id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
