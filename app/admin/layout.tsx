import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = cookies().get("admin")?.value === "true";

  if (!isAdmin) redirect("/login");

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-8 tracking-wide">
            Admin
        </h2>

        <nav className="space-y-3">
            <a
            href="/admin/programs"
            className="block px-3 py-2 rounded hover:bg-white/10 transition"
            >
            Programs
            </a>

            <a
            href="/admin/news"
            className="block px-3 py-2 rounded hover:bg-white/10 transition"
            >
            News
            </a>
        </nav>
        </aside>
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
