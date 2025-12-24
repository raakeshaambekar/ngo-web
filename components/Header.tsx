"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TEXT = {
  en: {
    title: "Mumbai Deshastha",
    subtitle: "Maratha Gyati–Dharma Sanstha",
    programs: "Programs",
    news: "News",
    about: "About",
    contact: "Contact",
    donate: "Donate",
  },
  mr: {
    title: "मुंबई देशस्थ",
    subtitle: "मराठा ज्ञाती–धर्म संस्था",
    programs: "कार्यक्रम",
    news: "बातम्या",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    donate: "देणगी",
  },
};

export default function Header({ lang }: { lang: "en" | "mr" }) {
  const [open, setOpen] = useState(false);
  const t = TEXT[lang];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src="/hero.jpg" alt="Logo" width={44} height={40} />
            <div>
              <h1 className="text-base md:text-lg font-semibold"
  style={{ color: "#C62828" }}>{t.title}</h1>
              <p className="text-xs md:text-sm font-medium" style={{ color: "#C9A227" }}>
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href={`/${lang}#programs`}>{t.programs}</Link>
            <Link href={`/${lang}#news`}>{t.news}</Link>
            <Link href={`/${lang}#about`}>{t.about}</Link>
            <Link href={`/${lang}#contact`}>{t.contact}</Link>

            <Link
              href={`/${lang === "en" ? "mr" : "en"}`}
              className="border px-3 py-1 rounded text-xs"
            >
              {lang === "en" ? "मराठी" : "English"}
            </Link>

            <Link
              href={`/${lang}/donate`}
              className="bg-red-600 text-white px-4 py-2 rounded-full"
            >
              {t.donate}
            </Link>
          </nav>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-4">
          <Link href={`/${lang}#programs`}>{t.programs}</Link>
          <Link href={`/${lang}#news`}>{t.news}</Link>
          <Link href={`/${lang}#about`}>{t.about}</Link>
          <Link href={`/${lang}#contact`}>{t.contact}</Link>
        </div>
      )}
    </header>
  );
}
