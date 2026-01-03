export const runtime = "nodejs";

import { cookies } from "next/headers";

export async function POST(req: Request) {
  const form = await req.formData();

  if (
    form.get("username") === process.env.ADMIN_USERNAME &&
    form.get("password") === process.env.ADMIN_PASSWORD
  ) {
    cookies().set("admin", "true", { httpOnly: true,path: "/"});
    return new Response(null, { status: 200 });
  }

  return new Response("Unauthorized", { status: 401 });
}
