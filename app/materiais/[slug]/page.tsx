import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMaterial, materiais } from "@/content/materiais";
import { Capa } from "@/components/Capa";
import { Inclusao, Mao, SetaExterna } from "@/components/Icones";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return materiais.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getMaterial((await params).slug);
  return m ? { title: m.titulo, description: m.resumo } : {};
}

export default async function PaginaMaterial({ params }: Props) {
  const m = getMaterial((await params).slug);
  if (!m) notFound();
  const relacionados = materiais.filter((r) => r.slug !== m.slug).slice(0, 2);

  return (
    <>
      <nav className="container trilha" aria-label="Você está em">
        <Link href="/">Início</Link><span aria-hidden="true">/</span>
        <Link href="/materiais">Materiais</Link><span aria-hidden="true">/</span>
        <Link href={`/materiais?pilar=${m.pilar}`}>{m.pilar}</Link><span aria-hidden="true">/</span>
        <span style={{ color: "var(--texto)", fontWeight: 700 }}>{m.titulo}</span>
      </nav>

      <section className="container produto" aria-labelledby="produto-titulo">
        <div className="produto__galeria">
          <div className="produto__palco">
            <Capa titulo={m.titulo} subtitulo={m.subtituloCapa} estilo={m.capa} tamanho="g" />
          </div>
          <div className="produto__miniaturas">
            <div className="miniatura miniatura--ativa">Capa</div>
            <div className="miniatura">[Prévia página]</div>
            <div className="miniatura">[Prévia página]</div>
            <div className="miniatura">{m.acessibilidade?.tipo === "libras" ? "[Vídeo]" : "[Prévia página]"}</div>
          </div>
        </div>

        <div className="produto__info">
          <div className="etiquetas">
            <span className="etiqueta">{m.pilar}</span>
            {m.publicos.map((p) => (
              <span key={p} className="etiqueta etiqueta--leve">{p}</span>
            ))}
          </div>
          <h1 id="produto-titulo" className="titulo-1" style={{ fontSize: 48 }}>{m.titulo}</h1>
          <p className="lead">{m.resumo}</p>
          <dl className="ficha">
            <div><dt>Faixa etária</dt><dd>{m.faixaEtaria}</dd></div>
            <div><dt>Formato</dt><dd>{m.formato}</dd></div>
            <div><dt>Páginas</dt><dd>{m.paginas}</dd></div>
            <div><dt>Textos-base</dt><dd>{m.referencias}</dd></div>
          </dl>
          {m.acessibilidade && (
            <div className="aviso">
              <span style={{ flex: "none", marginTop: 2 }}>{m.acessibilidade.tipo === "libras" ? <Mao size={24} /> : <Inclusao size={24} />}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <strong style={{ fontSize: 16, fontWeight: 900 }}>{m.acessibilidade.titulo}</strong>
                <span className="card__texto" style={{ fontSize: 15 }}>{m.acessibilidade.texto}</span>
              </div>
            </div>
          )}
          <div className="compra">
            <span className="compra__preco">{m.preco}</span>
            <a href={m.linkCakto} className="botao botao--primario" rel="noopener" target={m.linkCakto === "#" ? undefined : "_blank"}>
              Garantir o material <SetaExterna />
            </a>
          </div>
          <p className="nota">Pagamento seguro na Cakto. Acesso enviado por e-mail logo após a compra.</p>
        </div>
      </section>

      <section className="secao secao--branca" aria-labelledby="sobre-titulo">
        <div className="container duas-colunas">
          <div>
            <div className="rotulo">Sobre o material</div>
            <h2 id="sobre-titulo" className="titulo-2">Para que serve</h2>
          </div>
          <div style={{ flexGrow: 2 }}>
            {m.sobre.map((p, i) => (
              <p key={i} className="texto">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="secao container" aria-labelledby="aplicar-titulo">
        <div className="cabeca-secao" style={{ marginBottom: 40 }}>
          <div className="rotulo">Aplicação</div>
          <h2 id="aplicar-titulo" className="titulo-2">Onde aplicar</h2>
        </div>
        <div className="grade">
          {m.aplicacao.map((a) => (
            <div key={a.titulo} className="card">
              <span className="card__titulo">{a.titulo}</span>
              <span className="card__texto">{a.texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="secao secao--verde" aria-labelledby="passos-titulo">
        <div className="container">
          <div className="cabeca-secao" style={{ marginBottom: 40 }}>
            <div className="rotulo">Como usar</div>
            <h2 id="passos-titulo" className="titulo-2">Leia, observe, reflita e registre.</h2>
          </div>
          <ol className="passos">
            {m.passos.map((p, i) => (
              <li key={p.titulo}>
                <span className="passos__num">{i + 1}</span>
                <span className="card__titulo">{p.titulo}</span>
                <span className="passos__texto">{p.texto}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao container duas-colunas">
        <div>
          <h2 className="titulo-2" style={{ fontSize: 32 }}>O que vem no material</h2>
          <ul className="lista">
            {m.incluso.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="titulo-2" style={{ fontSize: 32 }}>Perguntas frequentes</h2>
          <div className="faq">
            {m.faq.map((f) => (
              <details key={f.pergunta}>
                <summary>{f.pergunta}</summary>
                <p>{f.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--salvia" aria-labelledby="relacionados-titulo" style={{ paddingBlock: 80 }}>
        <div className="container">
          <h2 id="relacionados-titulo" className="titulo-2" style={{ fontSize: 32, marginBottom: 32 }}>Continue aprendendo</h2>
          <div className="materiais">
            {relacionados.map((r) => (
              <Link key={r.slug} href={`/materiais/${r.slug}`} className="relacionado">
                <Capa titulo={r.titulo} subtitulo={r.subtituloCapa} estilo={r.capa} tamanho="p" />
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="etiquetas">{r.pilar}</span>
                  <span style={{ fontSize: 19, fontWeight: 900 }}>{r.titulo}</span>
                  <span style={{ fontWeight: 700 }}>Ver detalhes →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
