
import DonateButton from "../../../components/DonateButton";
import Link from "next/link";
import Image from "next/image";
import { getPrograms } from "../../../lib/program";
import { getNews } from "../../../lib/news";
import { ABOUT_HISTORY,HERO_CONTENT,IMPACT_CONTENT,CONTACT_CONTENT } from "./content/history";
export const runtime = "nodejs";

const PROGRAMS_CONTENT = {
  en: {
    sectionTitle: "Our Core Programs",
  },
  mr: {
    sectionTitle: "आमचे मुख्य उपक्रम",
  },
};

const NEWS_CONTENT = {
  en: {
    sectionTitle: "Latest News & Updates",
  },
  mr: {
    sectionTitle: "ताज्या बातम्या व घडामोडी",
  },
};

const DONATE_CONTENT = {
  en: {
    title: "Support Our Mission",
    description:
      "Your contribution helps us continue our efforts in education support, social welfare, and community development for the Deshastha Maratha community.",
  },
  mr: {
    title: "आमच्या कार्यास पाठबळ द्या",
    description:
      "आपले योगदान शिक्षण सहाय्य, सामाजिक कल्याण आणि देशस्थ मराठा समाजाच्या सर्वांगीण विकासासाठी उपयोगात येते.",
  },
};




export default async function Home({
  params,
}: {
  params: { lang: "en" | "mr" };
}) {
  const hero = HERO_CONTENT[params.lang];
  const aboutUs = ABOUT_HISTORY[params.lang];
  const programs = await getPrograms();
  const news = await getNews();

  return (
    <>
     

      {/* HERO */}
      <section id="about"
        className="text-white py-12 scroll-mt-24"
        style={{
          background: "linear-gradient(90deg, #C62828 0%, #D4AF37 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {hero?.title??""}
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90 mb-8">
            {hero?.description??""}
          </p>

          <DonateButton />
        </div>
      </section>

      <section
  id="about-history"
  className="py-10 bg-white"
>
  {/* Constrain width for Marathi readability */}
  <div className="max-w-2xl mx-auto px-6">

    {/* Title: heritage authority + divider */}
    <div className="text-center mb-8">
      <h2
        className="text-3xl md:text-4xl font-heritage text-red-800 leading-tight"
      >
        {aboutUs.title}
      </h2>

      {/* Subtle gold divider */}
      <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mt-3" />
    </div>

    {/* Body content */}
    <div
      className={`text-lg md:text-xl space-y-10 ${
        params.lang === "mr"
          ? "font-mr leading-[1.75] text-gray-800"
          : "font-en leading-relaxed text-gray-800"
      }`}
      style={{ wordSpacing: "0.06em",fontSize:"1.1rem"}}
    >
      {aboutUs.paragraphs.map((para: any, i: number) => {
        const isHistoricEvent = typeof para !== "string" && i === 1;

        return (
          <p
            key={i}
            className={`${
              isHistoricEvent
                ? "!mt-6 border-l-4 border-[#B8860B] pl-4 bg-[#FFF8F0]"
                : "!mt-6 "
            }`}
          >
            {typeof para === "string" ? (
              para
            ) : (
              para.parts.map((part: any, idx: number) => (
                <span
                  key={idx}
                  className={
                    part.type === "highlight"
                      ? "font-heritage text-[#B8860B] font-semibold"
                      : ""
                  }
                >
                  {part.text}
                </span>
              ))
            )}
          </p>
        );
      })}
    </div>

  </div>
</section>

      

      {/* PROGRAMS */}
        <section id="programs" className="py-6 " style={{ backgroundColor: "rgb(249 238 228)" }}>
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight py-1"
              style={{
                background: "linear-gradient(90deg, #C62828, #B8860B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
            {PROGRAMS_CONTENT[params.lang].sectionTitle}
            </h2>
            <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mt-3 mb-6" />
    
             <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
              {programs.map((p: any) => (
                <ProgramCard
                  key={p._id}
                  lang={params.lang}
                  slug={p.slug}
                  title={p.title[params.lang]}
                  excerpt={p.excerpt[params.lang]}
                  thumbnail={p.images?.[0].url}
                />
              ))}
            </div>
            {/* <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS_CONTENT[params.lang].items.map((program, index) => (
                <ProgramCard
                  key={program.slug}
                  lang={params.lang}
                  slug={program.slug}
                  title={program.title}
                  excerpt={program.excerpt}
                  thumbnail={program.thumbnail}
                />
            ))}
            </div> */}
        </div>
        </section>
      {/* IMPACT STRIP */}
      
    <section id="impact" className="bg-white py-10">
      
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            {IMPACT_CONTENT[params.lang].items.map((item, index) => (
            <ImpactStat
                key={index}
                value={item.value}
                label={item.label}
            />
            ))}
        </div>
    </section>


      {/* NEWS */}

    <section id="news" className="py-6 " style={{ backgroundColor: "rgb(249 238 228)" }}>
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center  leading-tight py-1"
              style={{
                background: "linear-gradient(90deg, #C62828, #B8860B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
            {NEWS_CONTENT[params.lang].sectionTitle}
            </h2>
            <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mt-3 mb-6" />
            <div className="grid md:grid-cols-3 gap-8">
            {news.map((n: any) => (
            <NewsCard
              key={n._id}
              lang={params.lang}
              slug={n.slug}
              date={n.date}
              title={n.title[params.lang]}
              excerpt={n.excerpt[params.lang]}
              thumbnail={n.images?.[0]}
            />
          ))}
            </div>
        </div>
    </section>


     
      {/* CONTACT US */}
  {/* CONTACT US */}
<section
  id="contact"
  className="py-10 bg-[#FFF6ED]"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2
        className="text-3xl md:text-4xl font-semibold text-red-800 leading-tight"
      >
        {CONTACT_CONTENT[params.lang].sectionTitle}
      </h2>

      <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mt-3" />

      <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        {CONTACT_CONTENT[params.lang].sectionSubtitle ??
          "Reach out to us for queries, support, or collaboration"}
      </p>
    </div>

    {/* Contact Card */}
    <div className="bg-white rounded-2xl border shadow-md border-t-[5px] border-[#B8860B] p-8 md:p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Phone & Email */}
        <div className="space-y-12">

          <div>
            <p className="font-semibold text-red-700 mb-1">
              {CONTACT_CONTENT[params.lang].phoneLabel}
            </p>
            <a
              href={`tel:${CONTACT_CONTENT[params.lang].phone}`}
              className="text-lg text-gray-800 hover:text-[#B8860B] transition"
            >
              {CONTACT_CONTENT[params.lang].phone}
            </a>
          </div>

          <div>
            <p className="font-semibold text-red-700 mb-1">
              {CONTACT_CONTENT[params.lang].emailLabel}
            </p>
            <a
              href={`mailto:${CONTACT_CONTENT[params.lang].email}`}
              className="text-lg text-gray-800 hover:text-[#B8860B] transition"
            >
              {CONTACT_CONTENT[params.lang].email}
            </a>
          </div>

        </div>

        {/* Right: Address */}
        <div>
          <div className="font-medium text-gray-900">
            {CONTACT_CONTENT[params.lang].addressHeader}
          </div>
          <div className="mt-1 underline">
            {CONTACT_CONTENT[params.lang].addressLabel}
          </div>

          <address className="not-italic text-gray-800 leading-relaxed text-lg space-y-1">
            {CONTACT_CONTENT[params.lang].address.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </address>

          {/* Optional Map Link */}
          <div className="mt-4">
            <a
              href={CONTACT_CONTENT[params.lang].mapLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-red-700 hover:text-[#B8860B] transition"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* SUPPORT OUR MISSION – UPI ONLY */}
<section id="donate" className="py-16 bg-gradient-to-r from-[#C62828] to-[#D4AF37]">
  <div className="max-w-5xl mx-auto px-6 text-center text-white">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      {DONATE_CONTENT[params.lang]?.title ?? ""}
    </h2>

    {/* Description */}
    <p className="max-w-2xl mx-auto mb-12 text-base md:text-lg opacity-95">
      {DONATE_CONTENT[params.lang]?.description ?? ""}
    </p>

    {/* QR GRID */}
    <div className="grid md:grid-cols-2 gap-8 justify-center">

      {/* GS Mahanagar QR */}
      <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">

        <p className="font-semibold text-red-700 mb-4">
          GS Mahanagar Co-operative Bank
        </p>

        <img
          src="/donate/qr-gs-mahanagar_1.jpg"
          alt="UPI QR GS Mahanagar Bank"
          className="w-52 mx-auto mb-4"
        />

        <p className="text-sm text-gray-600">
          Scan with any UPI app
        </p>

      </div>


      {/* Bank of Baroda QR */}
      <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">

        <p className="font-semibold text-red-700 mb-4">
          Bank of Baroda (BHIM Baroda Pay)
        </p>

        <img
          src="/donate/qr-baroda_1.jpg"
          alt="UPI QR Bank of Baroda"
          className="w-52 mx-auto mb-4"
        />

        <p className="text-sm text-gray-600">
          UPI ID
        </p>

        <p className="font-medium text-gray-900">
          mumbai98671546@barodampay
        </p>

      </div>

    </div>

    {/* Trust Note */}
    <p className="mt-10 text-sm opacity-90">
      Donations are received by Mumbai Deshastha Maratha Dhyati Dharma Sanstha
    </p>

  </div>
</section>
  

      
    </>
  );
}

function ProgramCard({
  lang,
  slug,
  title,
  excerpt,
  thumbnail,
}: {
  lang: "en" | "mr";
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
}) {
  return (
    <Link
      href={`/${lang}/programs/${slug}`}
      className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder="blur"
          blurDataURL="/placeholder-blur.png"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {excerpt}
        </p>

        {/* CTA – pinned to bottom */}
        <div className="mt-auto pt-4 border-t">
          <span className="inline-flex items-center text-sm font-medium text-[#C62828]">
            Read more
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function NewsCard({
  lang,
  slug,
  date,
  title,
  excerpt,
  thumbnail,
}: {
  lang: "en" | "mr";
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  thumbnail: string;
}) {
  return (
    <Link
      href={`/${lang}/news/${slug}`}
      className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder="blur"
          blurDataURL="/placeholder-blur.png"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs text-gray-500">{date}</span>

        <h3 className="font-semibold text-lg mt-2 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {excerpt}
        </p>

        {/* CTA – pinned to bottom */}
        <div className="mt-auto pt-4 border-t">
          <span className="inline-flex items-center text-sm font-medium text-[#C62828]">
            Read more
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}




function ImpactStat({ value, label }: any) {
  return (
    <div>
      <p className="text-4xl font-bold text-red-600 mb-2">{value}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}
