import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "mr" };
}) {
  return (
    <>
      <Header lang={params.lang} />
      {children}
      <Footer lang={params.lang} />
    </>
  );
}
