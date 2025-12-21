import { NextResponse } from "next/server";
import jsPDF from "jspdf";

export async function POST(req: Request) {
  const { name, amount, pan } = await req.json();
  const doc = new jsPDF();
  doc.text("80G Donation Receipt", 20, 20);
  doc.text(`Donor: ${name}`, 20, 40);
  doc.text(`Amount: INR ${amount}`, 20, 50);
  doc.text(`PAN: ${pan}`, 20, 60);
  const pdf = doc.output("arraybuffer");
  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf"
    }
  });
}