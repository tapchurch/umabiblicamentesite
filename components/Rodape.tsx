import Link from "next/link";
import { pilares } from "@/content/materiais";
import { Logo } from "./Marca";

export function Rodape() {
  return (
    <footer id="contato" className="rodape">
      <div className="container">
        <div className="rodape__topo">
          <Logo variante="branco" />
          <div className="rodape__colunas">
            <nav className="rodape__coluna" aria-label="Editora">
              <span className="rodape__titulo">Editora</span>
              <Link href="/#editora">Quem somos</Link>
              <Link href="/#editora">Missão e valores</Link>
              <Link href="/#manifesto">Manifesto</Link>
            </nav>
            <nav className="rodape__coluna" aria-label="Materiais">
              <span className="rodape__titulo">Materiais</span>
              {pilares.map((p) => (
                <Link key={p.nome} href={`/materiais?pilar=${p.nome}`}>{p.nome}</Link>
              ))}
            </nav>
            <div className="rodape__coluna">
              <span className="rodape__titulo">Contato</span>
              <span style={{ color: "var(--marfim)" }}>[e-mail de contato]</span>
              <span style={{ color: "var(--marfim)" }}>[@instagram]</span>
              <span style={{ color: "var(--marfim)" }}>[WhatsApp]</span>
            </div>
          </div>
        </div>
        <div className="rodape__base">
          <span>© {new Date().getFullYear()} Uma Biblicamente. Todos os direitos reservados.</span>
          <span>Conhecer a Palavra. Formar a mente. Viver a fé.</span>
        </div>
      </div>
    </footer>
  );
}
