import { getNews } from "../../../lib/news";
import { serializeDoc } from "../../../lib/serialize";
import NewsList from "./NewsList";
import Link from "next/link";

export default async function AdminNews() {
  const news = await getNews(true);
  const safeNews = news.map(serializeDoc);


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">News</h1>

        <Link
          href="/admin/news/new"
          className="bg-red-600 text-white px-4 py-2 rounded text-sm"
        >
          + New News
        </Link>
      </div>
      
      <NewsList news={safeNews} />
    </div>

    // <>
    //   <div className="flex justify-between mb-6">
    //     <h1 className="text-2xl font-semibold">News</h1>
    //     <a
    //       href="/admin/news/new"
    //       className="bg-red-600 text-white px-4 py-2 rounded"
    //     >
    //       + New News
    //     </a>
    //   </div>

    //   <table className="w-full bg-white border">
    //     <thead>
    //       <tr className="text-left border-b">
    //         <th className="p-3">Title</th>
    //         <th>Status</th>
    //         <th>Active</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {news.map((p: any) => (
    //         <tr key={p._id} className="border-b">
    //           <td className="p-3">{p.title.en}</td>
    //           <td>{p.status}</td>
    //           <td>{p.active ? "Yes" : "No"}</td>
    //           <td>
    //             <a
    //               href={`/admin/news/${p._id}`}
    //               className="text-blue-600"
    //             >
    //               Edit
    //             </a>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>
  );
}
