import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type_second } from "./functions/fonts";
import Header from "./components/header";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dog next",
  description: "rede social para cachorro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <div className="App">
        <Header/>
        <main className="AppBody" > {children}</main>
        <Footer />
        </div>
        </body>
    </html>
  );
}
