import type { EstiloCapa } from "@/content/materiais";
import { Logo, Simbolo } from "./Marca";

export function Capa({
  titulo,
  subtitulo,
  estilo,
  tamanho = "m",
}: {
  titulo: string;
  subtitulo: string;
  estilo: EstiloCapa;
  tamanho?: "p" | "m" | "g";
}) {
  const variante = estilo === "escuro" ? "branco" : "preto";
  const palavras = titulo.split(" ");
  const meio = Math.ceil(palavras.length / 2);
  return (
    <div className={`capa capa--${estilo} capa--${tamanho}`} aria-hidden="true">
      <div style={{ alignSelf: "center" }}>
        {tamanho === "p" ? <Simbolo variante={variante} largura={48} /> : <Logo variante={variante} largura={tamanho === "g" ? 150 : 120} />}
      </div>
      <div className="capa__linha" />
      <div className="capa__titulo">
        {palavras.slice(0, meio).join(" ")}
        <br />
        {palavras.slice(meio).join(" ")}
      </div>
      <div className="capa__sub">{subtitulo}</div>
    </div>
  );
}
