"use server";

import { TOKEN_POST } from "../functions/api";
import { ApiError } from "../functions/api-error";

export default async function login(formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) {
      throw new Error("Preencha todos os campos");
    }

    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!response.ok) throw new Error("Senha ou usuário inválido");
    const data = await response.json();
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
