import Image from "next/image";
import type { Bloco, Oferta } from "@/content/landing-pages";
import { BotaoCheckout } from "./BotaoCheckout";

const Pagina = ({ src, alt, prioridade = false }: { src: string; alt: string; prioridade?: boolean }) => (
  <Image src={src} alt={alt} width={1600} height={900} sizes="(max-width: 720px) 100vw, 720px" className="lp-pagina" priority={prioridade} />
);

function Cabeca({ rotulo, titulo }: { rotulo?: string; titulo: string }) {
  return (
    <div className="cabeca-secao">
      {rotulo && <div className="rotulo">{rotulo}</div>}
      <h2 className="titulo-2">{titulo}</h2>
    </div>
  );
}

export function Precos({ oferta }: { oferta: Oferta }) {
  return (
    <div className="lp-preco">
      {oferta.precoDe && <span className="lp-preco__de">De {oferta.precoDe} por</span>}
      <span className="lp-preco__valor">{oferta.preco}</span>
      {oferta.condicao && <span className="lp-preco__condicao">{oferta.condicao}</span>}
    </div>
  );
}

export function RenderBloco({ bloco, oferta }: { bloco: Bloco; oferta: Oferta }) {
  switch (bloco.tipo) {
    case "identificacao":
      return (
        <section className="secao secao--branca">
          <div className="container lp-estreito">
            <h2 className="titulo-2">{bloco.titulo}</h2>
            <ul className="lp-dores">
              {bloco.itens.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="lp-virada">{bloco.virada}</p>
          </div>
        </section>
      );

    case "mapa":
      return (
        <section className="secao">
          <div className="container duas-colunas lp-centro">
            <div>
              <div className="rotulo">{bloco.rotulo}</div>
              <h2 className="titulo-2">{bloco.titulo}</h2>
              <p className="texto">{bloco.texto}</p>
              <ul className="lp-chips" aria-label="Divisões">
                {bloco.divisoes.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <Pagina {...bloco.imagem} />
            </div>
          </div>
        </section>
      );

    case "anatomia":
      return (
        <section className="secao secao--salvia">
          <div className="container">
            <Cabeca rotulo={bloco.rotulo} titulo={bloco.titulo} />
            <div className="duas-colunas lp-centro">
              <div style={{ flexGrow: 1.4 }}>
                <Pagina {...bloco.imagem} />
              </div>
              <ol className="lp-anatomia">
                {bloco.pontos.map((p, i) => (
                  <li key={p.titulo}>
                    <span className="lp-anatomia__num">{i + 1}</span>
                    <div>
                      <strong>{p.titulo}</strong>
                      <span>{p.texto}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      );

    case "galeria":
      return (
        <section className="secao">
          <div className="container">
            <Cabeca rotulo={bloco.rotulo} titulo={bloco.titulo} />
            <div className="lp-galeria">
              {bloco.imagens.map((img) => (
                <Pagina key={img.src} {...img} />
              ))}
            </div>
          </div>
        </section>
      );

    case "publicos":
      return (
        <section className="secao secao--branca">
          <div className="container">
            <Cabeca rotulo={bloco.rotulo} titulo={bloco.titulo} />
            <div className="grade">
              {bloco.itens.map((p) => (
                <div key={p.titulo} className="card card--marfim">
                  <span className="card__titulo">{p.titulo}</span>
                  <span className="card__texto">{p.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "passos":
      return (
        <section className="secao secao--verde">
          <div className="container">
            <Cabeca rotulo={bloco.rotulo} titulo={bloco.titulo} />
            <ol className="passos">
              {bloco.itens.map((p, i) => (
                <li key={p.titulo}>
                  <span className="passos__num">{i + 1}</span>
                  <span className="card__titulo">{p.titulo}</span>
                  <span className="passos__texto">{p.texto}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "depoimentos":
      if (!bloco.itens.length) return null; // só aparece com depoimentos reais
      return (
        <section className="secao">
          <div className="container">
            <Cabeca titulo={bloco.titulo} />
            <div className="grade">
              {bloco.itens.map((d) => (
                <figure key={d.nome} className="card" style={{ margin: 0 }}>
                  <blockquote className="card__texto" style={{ margin: 0, fontSize: 17 }}>“{d.texto}”</blockquote>
                  <figcaption style={{ marginTop: "auto" }}>
                    <strong>{d.nome}</strong> · <span className="nota">{d.contexto}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      );

    case "oferta":
      return (
        <section id="oferta" className="secao">
          <div className="container">
            <div className="lp-oferta">
              <div className="lp-oferta__lista">
                <h2 className="titulo-2" style={{ fontSize: 32 }}>{bloco.titulo}</h2>
                <ul className="lista">
                  {bloco.incluso.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-oferta__caixa">
                <Precos oferta={oferta} />
                <BotaoCheckout href={oferta.linkCheckout} texto={oferta.textoBotao} />
                <p className="nota" style={{ color: "#d5dcd7" }}>Pagamento seguro pela Cakto. Acesso imediato por e-mail.</p>
              </div>
            </div>
          </div>
        </section>
      );

    case "garantia":
      return (
        <section className="secao secao--branca" style={{ paddingBlock: 64 }}>
          <div className="container lp-garantia">
            <div className="lp-selo" aria-hidden="true">
              <span>7</span>
              <small>dias</small>
            </div>
            <div>
              <h2 className="titulo-2" style={{ fontSize: 28 }}>{bloco.titulo}</h2>
              <p className="texto">{bloco.texto}</p>
            </div>
          </div>
        </section>
      );

    case "faq":
      return (
        <section className="secao">
          <div className="container lp-estreito">
            <h2 className="titulo-2" style={{ fontSize: 32, marginBottom: 24 }}>{bloco.titulo}</h2>
            <div className="faq">
              {bloco.itens.map((f) => (
                <details key={f.pergunta}>
                  <summary>{f.pergunta}</summary>
                  <p>{f.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      );

    case "fechamento":
      return (
        <section className="secao secao--verde">
          <div className="container lp-estreito lp-fechamento">
            <h2 className="titulo-2">{bloco.titulo}</h2>
            <p className="lead" style={{ color: "#d5dcd7" }}>{bloco.texto}</p>
            <Precos oferta={oferta} />
            <BotaoCheckout href={oferta.linkCheckout} texto={oferta.textoBotao} className="lp-botao--claro" />
          </div>
        </section>
      );
  }
}
