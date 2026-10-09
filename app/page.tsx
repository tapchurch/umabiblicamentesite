import Link from "next/link";
import { materiais, pilares } from "@/content/materiais";
import { Capa } from "@/components/Capa";
import { CardMaterial } from "@/components/CardMaterial";
import { Simbolo } from "@/components/Marca";
import { Seta } from "@/components/Icones";

const valores = [
  { titulo: "Centralidade bíblica", texto: "As Escrituras orientam o conteúdo, e suas referências são tratadas com responsabilidade." },
  { titulo: "Ensino com propósito", texto: "Cada recurso tem uma intenção clara: ajudar a compreender, refletir e aplicar." },
  { titulo: "Clareza com profundidade", texto: "Linguagem simples, sem esvaziar o significado dos temas bíblicos." },
  { titulo: "Respeito às gerações", texto: "Diálogo com crianças, adolescentes e adultos, respeitando cada etapa da vida." },
];

const publicos = [
  { nome: "Crianças", frase: "Aprender com experiências visuais, práticas e lúdicas.", formatos: "Atividades, histórias, jogos e panoramas" },
  { nome: "Adolescentes", frase: "Relacionar o texto bíblico às dúvidas e escolhas do cotidiano.", formatos: "Estudos e jornadas com linguagem atual" },
  { nome: "Adultos", frase: "Aprofundar a leitura e cultivar constância.", formatos: "Devocionais, fichários e estudos" },
  { nome: "Mediadores", frase: "Ensinar e acompanhar a formação de outros.", formatos: "Famílias, professores, igrejas e ministérios", destaque: true },
];

export default function Home() {
  return (
    <>
      <section className="container hero" aria-labelledby="hero-titulo">
        <div className="hero__texto">
          <div className="rotulo">Editora cristã</div>
          <h1 id="hero-titulo" className="titulo-1">
            Conhecer a Palavra.<br />Formar a mente.<br />Viver a fé.
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Materiais bíblicos que unem Escrituras, pedagogia e linguagem visual, para aprender, ensinar e conversar
            sobre a Palavra em família, na igreja e na sala de aula.
          </p>
          <div className="hero__acoes">
            <Link href="/materiais" className="botao botao--primario">Explorar materiais</Link>
            <Link href="#editora" className="botao botao--secundario">Conheça a editora</Link>
          </div>
        </div>
        <div className="hero__capas" aria-hidden="true">
          {materiais.slice(0, 3).map((m) => (
            <Capa key={m.slug} titulo={m.titulo} subtitulo={m.subtituloCapa} estilo={m.capa} />
          ))}
        </div>
      </section>

      <section id="editora" className="secao secao--branca" aria-labelledby="editora-titulo">
        <div className="container duas-colunas">
          <div>
            <div className="rotulo">A editora</div>
            <h2 id="editora-titulo" className="titulo-2">Iluminar caminhos por meio da Palavra.</h2>
            <p className="texto">
              Inspirada em Salmos 119:105 e Provérbios 22:6, a Uma Biblicamente cria recursos para que a aprendizagem
              bíblica faça sentido para a vida: não apenas apresentar conteúdos, mas favorecer compreensão, reflexão e
              prática.
            </p>
          </div>
          <div className="grade">
            {valores.map((v, i) => (
              <div key={v.titulo} className="card card--marfim">
                <span className="num">0{i + 1}</span>
                <span className="card__titulo">{v.titulo}</span>
                <span className="card__texto">{v.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao container" aria-labelledby="pilares-titulo">
        <div className="cabeca-secao">
          <div className="rotulo">Linhas editoriais</div>
          <h2 id="pilares-titulo" className="titulo-2">Uma marca. Quatro movimentos.</h2>
          <p className="texto">Cada material nasce de um dos quatro movimentos da aprendizagem bíblica. Escolha por onde começar.</p>
        </div>
        <div className="pilares">
          {pilares.map((p) => (
            <Link key={p.nome} href={`/materiais?pilar=${p.nome}`} className="pilar">
              <span className="pilar__nome">{p.nome}</span>
              <span className="card__texto">{p.descricao}</span>
              <span className="pilar__formatos">{p.formatos}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="materiais" className="secao secao--salvia" aria-labelledby="materiais-titulo">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 40 }}>
            <div className="cabeca-secao" style={{ marginBottom: 0 }}>
              <div className="rotulo">Materiais</div>
              <h2 id="materiais-titulo" className="titulo-2">Para estudar, ensinar e viver a Palavra.</h2>
            </div>
            <Link href="/materiais" className="link-seta">Ver todos os materiais <Seta /></Link>
          </div>
          <div className="materiais">
            {materiais.map((m) => (
              <CardMaterial key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      <section id="para-quem" className="secao container" aria-labelledby="publicos-titulo">
        <div className="cabeca-secao">
          <div className="rotulo">Para quem criamos</div>
          <h2 id="publicos-titulo" className="titulo-2">Uma identidade, cada fase da vida.</h2>
        </div>
        <div className="grade">
          {publicos.map((p) => (
            <Link key={p.nome} href="/materiais" className={`card publico${p.destaque ? " publico--destaque" : ""}`}>
              <span className="publico__rotulo">{p.nome}</span>
              <span className="card__titulo">{p.frase}</span>
              <span className="card__texto" style={{ marginTop: "auto" }}>{p.formatos}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="manifesto" className="secao secao--verde" aria-labelledby="manifesto-titulo">
        <div className="container manifesto">
          <div className="manifesto__lado">
            <Simbolo variante="branco" largura={96} />
            <div style={{ width: 64, height: 3, background: "var(--dourado)" }} />
            <h2 id="manifesto-titulo" className="titulo-2" style={{ fontSize: 44 }}>Conhecer.<br />Formar.<br />Viver.</h2>
          </div>
          <div className="manifesto__texto">
            <p>
              Acreditamos que a Palavra de Deus ilumina caminhos e merece ser ensinada com cuidado. Que aprender vai
              além de memorizar; é também perguntar, compreender, refletir e viver.
            </p>
            <p>
              Criamos para todas as idades, sem escolher entre beleza e profundidade. Cada página, atividade e recurso
              é uma oportunidade de aproximar pessoas das Escrituras.
            </p>
            <p style={{ color: "#e3d3b6" }}>
              Cuidamos da forma para que a mensagem chegue. E cuidamos da mensagem porque ela é o centro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
