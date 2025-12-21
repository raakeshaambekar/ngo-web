"use client";

export default function DonateButton() {
  const donate = async () => {
    const res = await fetch("/api/donate", {
      method: "POST",
      body: JSON.stringify({ amount: 500 })
    });
    const order = await res.json();
    // @ts-ignore
    new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      order_id: order.id
    }).open();
  };

  return (
    <button onClick={donate} className="bg-red-600 text-white px-6 py-3 rounded">
      Donate Now
    </button>
  );
}