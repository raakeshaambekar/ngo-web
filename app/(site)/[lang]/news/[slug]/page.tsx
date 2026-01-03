export const runtime = "nodejs";
import { notFound } from "next/navigation";
import ImageGallery from "./image-gallery";
import RichContent from "../../../../../components/RichContent";
import { getNewsBySlug } from "../../../../../lib/news";


const NEWS_DETAILS: Record<string, any> = {
  "annual-general-meeting-2025": {
    date: "2024–2025",
    title: {
      en: "Annual General Meeting Conducted",
      mr: "वार्षिक सर्वसाधारण सभा पार पडली",
    },
    description: {
      en: `
The Annual General Meeting was conducted in accordance with statutory
guidelines.

Key discussions included:
• Review of last year's activities
• Approval of audited financial reports
• Planning future social and educational initiatives

Members actively participated and shared valuable suggestions.
      `,
      mr: `
नियमानुसार वार्षिक सर्वसाधारण सभा पार पडली.

सभेमध्ये पुढील मुद्द्यांवर चर्चा करण्यात आली:
• मागील वर्षाच्या कार्याचा आढावा
• लेखापरीक्षित आर्थिक अहवालास मंजुरी
• भावी सामाजिक व शैक्षणिक उपक्रमांचे नियोजन

सभासदांनी सक्रिय सहभाग नोंदवला.
      `,
    },
    images: [
      "/news/agm/1.jpg",
      "/news/agm/2.jpg",
      "/news/agm/3.jpg",
    ],
  },
};



export default async function NewsDetail({
  params,
}: {
  params: { lang: "en" | "mr"; slug: string };
}) {
  const news = await getNewsBySlug(params.slug);

  if (!news) notFound();

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Date */}
        <p className="text-sm text-gray-500 mb-3">
          {news.date}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {news.title[params.lang]}
        </h1>

        {/* Optional excerpt */}
        {news.excerpt?.[params.lang] && (
          <p className="text-lg text-gray-600 mb-8">
            {news.excerpt[params.lang]}
          </p>
        )}

        {/* Rich Content */}
        <div className="mb-10">
          <RichContent content={news.content[params.lang]} />
        </div>

        {/* Image Gallery */}
        {news.images?.length > 0 && (
          <ImageGallery images={news.images} />
        )}
      </div>
    </section>
  );
}


// export default function NewsDetail({
//   params,
// }: {
//   params: { lang: "en" | "mr"; slug: string };
// }) {
//   const news = NEWS_DETAILS[params.slug];

//   if (!news) return notFound();

//   return (
//     <section className="py-20">
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Date */}
//         <p className="text-sm text-gray-500 mb-3">
//           {news.date}
//         </p>

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold mb-6">
//           {news.title[params.lang]}
//         </h1>

//         {/* Description */}
//         <div className="prose max-w-none mb-10">
//           {news.description[params.lang]
//             .trim()
//             .split("\n")
//             .map((p: string, i: number) => (
//               <p key={i}>{p}</p>
//             ))}
//         </div>

//         {/* Image Gallery */}
//         <ImageGallery images={news.images} />
//       </div>
//     </section>
//   );
// }