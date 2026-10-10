import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLandingPage, landingPages } from "@/content/landing-pages";
import { Precos, RenderBloco } from "@/components/lp/Blocos";
import { BotaoCheckout } from "@/components/lp/BotaoCheckout";
import { Logo } from "@/components/Marca";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((lp) => ({ slug: lp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lp = getLandingPage((await params).slug);
  if (!lp) return {};
  return {
    title: lp.seo.titulo,
    description: lp.seo.descricao,
    openGraph: { title: lp.seo.titulo, description: lp.seo.descricao, images: [lp.seo.imagem], locale: "pt_BR", type: "website" },
  };
}

export default async function LandingPage({ params }: Props) {
  const lp = getLandingPage((await params).slug);
  if (!lp) notFound();
  const { hero, oferta } = lp;

  return (
    <>
      <header className="lp-topo">
        <div className="container">
          <Logo largura={132} />
        </div>
      </header>

      <section className="container lp-hero">
        <div className="lp-hero__texto">
          <div className="rotulo">{hero.rotulo}</div>
          <h1 className="titulo-1 lp-hero__titulo">{hero.titulo}</h1>
          <p className="lead">{hero.subtitulo}</p>
          <div className="lp-hero__acao">
            <Precos oferta={oferta} />
            <BotaoCheckout href={oferta.linkCheckout} texto={oferta.textoBotao} />
          </div>
          <p className="nota">{hero.microcopia}</p>
        </div>
        <div className="lp-hero__paginas" aria-hidden="true">
          {hero.imagens.map((img, i) => (
            <Image key={img.src} src={img.src} alt="" width={1600} height={900} className="lp-pagina" priority={i === hero.imagens.length - 1} sizes="(max-width: 720px) 90vw, 560px" />
          ))}
        </div>
      </section>

      {lp.blocos.map((b, i) => (
        <RenderBloco key={`${b.tipo}-${i}`} bloco={b} oferta={oferta} />
      ))}

      <footer className="lp-rodape">
        <div className="container">
          <Logo variante="branco" largura={120} />
          <span>© {new Date().getFullYear()} Uma Biblicamente · Conhecer a Palavra. Formar a mente. Viver a fé.</span>
        </div>
      </footer>

      <div className="lp-barra" role="region" aria-label="Comprar">
        <Precos oferta={oferta} />
        <BotaoCheckout href={oferta.linkCheckout} texto={oferta.textoBotao} />
      </div>
    </>
  );
}
