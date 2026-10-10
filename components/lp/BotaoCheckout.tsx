"use client";

import { useEffect, useState } from "react";
import { SetaExterna } from "@/components/Icones";

// Repassa os parâmetros de campanha (utm_*, src, fbclid...) da URL da landing page
// para o link da Cakto, para saber qual anúncio gerou cada venda.
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid"];

export function BotaoCheckout({ href, texto, className = "" }: { href: string; texto: string; className?: string }) {
  const [url, setUrl] = useState(href);

  useEffect(() => {
    if (!href.startsWith("http")) return;
    const atual = new URLSearchParams(window.location.search);
    const destino = new URL(href);
    PARAMS.forEach((p) => {
      const v = atual.get(p);
      if (v && !destino.searchParams.has(p)) destino.searchParams.set(p, v);
    });
    setUrl(destino.toString());
  }, [href]);

  return (
    <a href={url} className={`botao botao--primario lp-botao ${className}`} rel="noopener">
      {texto} <SetaExterna />
    </a>
  );
}
