import LoginCriarForm from "@/app/components/login/login-form-criar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua  conta",
  description: "Crie sua conta para acessar o site do dogs",
};

export default async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se seu Dog</h1>
      <LoginCriarForm />
      
    </div>
  );
}
