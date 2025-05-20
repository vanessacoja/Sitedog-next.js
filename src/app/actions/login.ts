"use server";

import { cookies } from "next/headers";

export default async function login(formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  const body = {
    username: username || "",
    password: password || "",
  };

  const response = await fetch(
    "https://dogspi.origamid.dev/json/jwt-auth/v1/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 20, // 20 horas
  });

  console.log(data);
}
