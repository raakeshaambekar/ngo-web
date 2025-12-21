import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">Empowering Communities</h1>
        <p className="mt-4">Production Ready NGO Website</p>
        <div className="mt-6"><DonateButton /></div>
      </main>
      <Footer />
    </>
  );
}