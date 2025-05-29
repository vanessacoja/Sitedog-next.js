"use client";

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
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const userPost = async (formData: FormData) => {
    // Example implementation: replace with your actual API call logic
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        return {
          ok: false,
          error: data.message || "Failed to create user",
          data: null,
        };
      }
      return { ok: true, error: "", data };
    } catch (error: any) {
      return {
        ok: false,
        error: error.message || "An unexpected error occurred",
        data: null,
      };
    }
  };

  const [state, action] = useFormState<{
    ok: boolean;
    error: string;
    data: any;
  }>(async (formData) => await userPost(formData), {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="Email /Usuário" name="login" type="text" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
