import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4 flex gap-4">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      <span className="font-bold">NGO Name</span>
    </header>
  );
}