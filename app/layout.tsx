import type { Metadata } from "next";
import { Topo } from "@/components/Topo";
import { Rodape } from "@/components/Rodape";
// Lato auto-hospedada (sem depender do Google Fonts em tempo de build)
import "@fontsource/lato/latin-400.css";
import "@fontsource/lato/latin-700.css";
import "@fontsource/lato/latin-900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Uma Biblicamente — Editora cristã", template: "%s · Uma Biblicamente" },
  description:
    "Materiais bíblicos que unem Escrituras, pedagogia e linguagem visual para aprender, ensinar e conversar sobre a Palavra em família, na igreja e na sala de aula.",
  // Site em pré-lançamento: fora dos buscadores até o conteúdo final estar pronto.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
