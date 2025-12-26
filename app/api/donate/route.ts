import { NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET!,
// });

// export async function POST(req: Request) {
//   const { amount } = await req.json();
//   const order = await razorpay.orders.create({
//     amount: amount * 100,
//     currency: "INR"
//   });
//   return NextResponse.json(order);
// }
export async function POST() {
  return new Response(
    JSON.stringify({ message: "Donations temporarily disabled" }),
    { status: 200 }
  );
}