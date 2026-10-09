import Link from "next/link";
import { Logo } from "./Marca";

export function Topo() {
  return (
    <header className="topo">
      <div className="container topo__barra">
        <Link href="/" aria-label="Uma Biblicamente, página inicial">
          <Logo />
        </Link>
        <nav className="topo__nav" aria-label="Principal">
          <Link href="/#editora">A editora</Link>
          <Link href="/materiais">Materiais</Link>
          <Link href="/#para-quem">Para quem</Link>
          <Link href="#contato">Contato</Link>
          <Link href="/materiais" className="botao botao--primario">Ver materiais</Link>
        </nav>
      </div>
    </header>
  );
}
