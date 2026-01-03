import ContentForm from "../../../../components/admin/ContentForm";
import { serializeDoc } from "../../../../lib/serialize";
import { getNewsById, updateNews } from "./../../../../lib/news";

export default async function EditNews({ params }: any) {
  const news = await getNewsById(params.id);
  const safeNews = serializeDoc(news);

  async function handleSubmit(data: any) {
    "use server";
    await updateNews(params.id, data);
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">Edit News</h1>
      <ContentForm
        type="News"
        initialData={safeNews}
        onSubmit={handleSubmit}
      />
    </>
  );
}
