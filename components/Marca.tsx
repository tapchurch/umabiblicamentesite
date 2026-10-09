import Image from "next/image";

// Assinatura recortada do PDF do manual. Substituir pelo SVG original quando disponível.
export function Logo({ variante = "preto", largura = 180 }: { variante?: "preto" | "branco"; largura?: number }) {
  return (
    <Image
      src={`/marca/logo-${variante}.png`}
      alt="Uma Biblicamente"
      width={largura}
      height={Math.round((largura * 511) / 855)}
      priority={variante === "preto"}
    />
  );
}

export function Simbolo({ variante = "preto", largura = 48 }: { variante?: "preto" | "branco"; largura?: number }) {
  return (
    <Image
      src={`/marca/simbolo-${variante}.png`}
      alt=""
      aria-hidden="true"
      width={largura}
      height={Math.round((largura * 782) / 927)}
    />
  );
}
