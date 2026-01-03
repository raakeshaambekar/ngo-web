"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h1 className="text-xl font-semibold mb-6">Admin Login</h1>

        <input
          name="username"
          placeholder="Username"
          className="w-full border p-2 mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <button className="w-full bg-red-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
