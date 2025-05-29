import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu sua  conta ?",
  description: "Perdeu sua senha no site dogs",
};

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
    </div>
  );
}
