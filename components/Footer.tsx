export default function Footer({ lang }: { lang: "en" | "mr" }) {
  const TEXT = {
    en: {
      copyright: "© Mumbai Deshastha Maratha Gyati–Dharma Sanstha",
      rights: "All rights reserved.",
    },
    mr: {
      copyright: "© मुंबई देशस्थ मराठा ज्ञाती–धर्म संस्था",
      rights: "सर्व हक्क राखीव.",
    },
  };

  const t = TEXT[lang];

  return (
    <footer className="bg-white text-red-600">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
        <p className="font-medium">{t.copyright}</p>
        <p className="opacity-80 mt-1">{t.rights}</p>
      </div>
    </footer>
  );
}
