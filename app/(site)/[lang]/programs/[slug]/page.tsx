
import { notFound } from "next/navigation";
import ImageGallery from "./image-gallery";

const PROGRAM_DETAILS: Record<string, any> = {
  "education-support": {
    title: {
      en: "Education Support",
      mr: "शैक्षणिक सहाय्य",
    },
    description: {
      en: `
We provide financial assistance, scholarships, and educational resources
to deserving students from the Deshastha Maratha community.

Our focus is on long-term academic success, covering school fees, books,
and higher education guidance.
      `,
      mr: `
देशस्थ मराठा समाजातील गरजू विद्यार्थ्यांना शैक्षणिक सहाय्य, शिष्यवृत्ती
आणि शिक्षणासाठी आवश्यक साधने पुरवली जातात.

विद्यार्थ्यांच्या दीर्घकालीन प्रगतीसाठी आमचे कार्य सुरू आहे.
      `,
    },
    images: [
      "/programs/education/1.jpg",
      "/programs/education/2.jpg",
      "/programs/education/3.jpg",
    ],
  },
};


export default function ProgramDetail({
  params,
}: {
  params: { lang: "en" | "mr"; slug: string };
}) {
  const program = PROGRAM_DETAILS[params.slug];

  if (!program) return notFound();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {program.title[params.lang]}
        </h1>

        <div className="prose max-w-none mb-10">
          {program.description[params.lang]
            .trim()
            .split("\n")
            .map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
        </div>

        {/* IMAGE GALLERY */}
        <ImageGallery images={program.images} />
      </div>
    </section>
  );
}