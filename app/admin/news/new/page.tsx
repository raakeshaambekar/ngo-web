import ContentForm from "../../../../components/admin/ContentForm";
import { createNews } from "./../../../../lib/news";

export default function NewNews() {
  async function handleSubmit(data: any) {
    "use server";
    await createNews({
      ...data,
      publishedAt: new Date(),
    });
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">New News</h1>
      <ContentForm type="News" onSubmit={handleSubmit} />
    </>
  );
}
