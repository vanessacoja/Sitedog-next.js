"use client";

import login from "@/app/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/app/components/forms/button";
import Input from "@/app/components/forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>processando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const userPost = async (formData: FormData) => {
    // Example implementation: replace with your actual API call logic
    const response = await fetch("/api/user", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return await response.json();
  };

  const [state, action] = useFormState(() => userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
