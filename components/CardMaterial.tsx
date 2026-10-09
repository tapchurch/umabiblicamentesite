import Link from "next/link";
import type { Material } from "@/content/materiais";
import { Capa } from "./Capa";
import { Inclusao, Mao } from "./Icones";

export function CardMaterial({ m }: { m: Material }) {
  return (
    <Link href={`/materiais/${m.slug}`} className="material">
      <div className="material__vitrine">
        <Capa titulo={m.titulo} subtitulo={m.subtituloCapa} estilo={m.capa} tamanho="p" />
      </div>
      <div className="material__corpo">
        <div className="etiquetas">
          <span className="etiqueta">{m.pilar}</span>
          <span style={{ color: "var(--texto-suave)", padding: "4px 0" }}>{m.publicos.join(" · ")}</span>
        </div>
        <h3 className="material__titulo">{m.titulo}</h3>
        <p className="card__texto">{m.resumo}</p>
        <div className="material__rodape">
          {m.acessibilidade ? (
            <span className="selo">
              {m.acessibilidade.tipo === "libras" ? <Mao /> : <Inclusao />}
              {m.acessibilidade.tipo === "libras" ? "Versão em Libras" : "Versão adaptada"}
            </span>
          ) : (
            <span />
          )}
          <span>Ver detalhes →</span>
        </div>
      </div>
    </Link>
  );
}
