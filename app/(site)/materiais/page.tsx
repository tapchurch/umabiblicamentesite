import type { Metadata } from "next";
import Link from "next/link";
import { materiais, pilares } from "@/content/materiais";
import { CardMaterial } from "@/components/CardMaterial";

export const metadata: Metadata = { title: "Materiais" };

export default async function Materiais({ searchParams }: { searchParams: Promise<{ pilar?: string }> }) {
  const { pilar } = await searchParams;
  const lista = pilar ? materiais.filter((m) => m.pilar === pilar) : materiais;
  return (
    <section className="secao container" aria-labelledby="catalogo-titulo">
      <div className="cabeca-secao">
        <div className="rotulo">Materiais</div>
        <h1 id="catalogo-titulo" className="titulo-2">Para estudar, ensinar e viver a Palavra.</h1>
      </div>
      <nav className="filtros" aria-label="Filtrar por movimento">
        <Link href="/materiais" className={`filtro${!pilar ? " filtro--ativo" : ""}`} aria-current={!pilar ? "page" : undefined}>Todos</Link>
        {pilares.map((p) => (
          <Link
            key={p.nome}
            href={`/materiais?pilar=${p.nome}`}
            className={`filtro${pilar === p.nome ? " filtro--ativo" : ""}`}
            aria-current={pilar === p.nome ? "page" : undefined}
          >
            {p.nome}
          </Link>
        ))}
      </nav>
      {lista.length ? (
        <div className="materiais">
          {lista.map((m) => (
            <CardMaterial key={m.slug} m={m} />
          ))}
        </div>
      ) : (
        <p className="texto">Em breve, novos materiais neste movimento.</p>
      )}
    </section>
  );
}
