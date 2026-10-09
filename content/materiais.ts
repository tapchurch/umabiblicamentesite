// Catálogo provisório. Na próxima etapa estes dados passam para o CMS (Payload).
// Textos entre colchetes são espaços reservados a serem preenchidos pela editora.

export type Pilar = "Conhecer" | "Compreender" | "Cultivar" | "Compartilhar";
export type EstiloCapa = "claro" | "escuro" | "salvia";

export interface Material {
  slug: string;
  titulo: string;
  subtituloCapa: string;
  resumo: string;
  pilar: Pilar;
  publicos: string[];
  capa: EstiloCapa;
  acessibilidade?: { tipo: "libras" | "adaptado"; titulo: string; texto: string };
  faixaEtaria: string;
  formato: string;
  paginas: string;
  referencias: string;
  preco: string;
  linkCakto: string;
  sobre: string[];
  aplicacao: { titulo: string; texto: string }[];
  passos: { titulo: string; texto: string }[];
  incluso: string[];
  faq: { pergunta: string; resposta: string }[];
}

const passosPadrao = (texto: string[]) =>
  ["Leia", "Observe", "Reflita", "Registre"].map((titulo, i) => ({ titulo, texto: texto[i] }));

export const materiais: Material[] = [
  {
    slug: "panorama-biblico",
    titulo: "Panorama Bíblico",
    subtituloCapa: "Guia visual do Antigo e Novo Testamento",
    resumo: "Um guia visual para percorrer o Antigo e o Novo Testamento.",
    pilar: "Conhecer",
    publicos: ["Crianças", "Famílias"],
    capa: "claro",
    acessibilidade: {
      tipo: "libras",
      titulo: "Inclui versão em Libras",
      texto: "Vídeos de apoio para que crianças surdas acompanhem o conteúdo junto com a família.",
    },
    faixaEtaria: "[idade]",
    formato: "PDF para imprimir",
    paginas: "[nº de páginas]",
    referencias: "[referências bíblicas]",
    preco: "[PREÇO]",
    linkCakto: "#",
    sobre: [
      "[Descrição do material: o que a criança vai conhecer, qual o objetivo pedagógico e por que este recurso ajuda a compreender a Bíblia como uma grande história.]",
      "[Segundo parágrafo opcional: diferenciais do material, cuidado com contexto e fidelidade textual.]",
    ],
    aplicacao: [
      { titulo: "Em casa", texto: "[Como usar no culto doméstico ou em momentos de conversa com os filhos.]" },
      { titulo: "Na escola dominical", texto: "[Como o professor conduz a aula com o material e quanto tempo leva.]" },
      { titulo: "Em grupos e células", texto: "[Como adaptar para grupos pequenos ou ministério infantil.]" },
    ],
    passos: passosPadrao([
      "[Instrução do passo: qual texto bíblico ler e como apresentar.]",
      "[Instrução do passo: o que explorar no mapa ou na linha do tempo.]",
      "[Perguntas para conversar sobre o que aprenderam.]",
      "[Atividade de registro: desenho, colagem ou anotação.]",
    ]),
    incluso: [
      "[Item incluído, ex.: linha do tempo ilustrada]",
      "[Item incluído, ex.: mapas das terras bíblicas]",
      "[Item incluído, ex.: atividades de fixação]",
      "[Item incluído, ex.: guia para o adulto que conduz]",
    ],
    faq: [
      { pergunta: "Como recebo o material?", resposta: "[Resposta: entrega por e-mail pela Cakto, formato do arquivo.]" },
      { pergunta: "Posso imprimir quantas vezes quiser?", resposta: "[Resposta: regras de uso e impressão.]" },
      { pergunta: "Posso usar na igreja com várias crianças?", resposta: "[Resposta: licença para uso em turmas.]" },
    ],
  },
  {
    slug: "jornada-devocional",
    titulo: "Jornada Devocional",
    subtituloCapa: "Reflexões para o cotidiano",
    resumo: "Leituras e registros para construir constância no dia a dia.",
    pilar: "Cultivar",
    publicos: ["Adolescentes", "Adultos"],
    capa: "escuro",
    faixaEtaria: "[idade]",
    formato: "PDF para imprimir",
    paginas: "[nº de páginas]",
    referencias: "[referências bíblicas]",
    preco: "[PREÇO]",
    linkCakto: "#",
    sobre: ["[Descrição do material.]"],
    aplicacao: [
      { titulo: "Devocional pessoal", texto: "[Como usar no dia a dia.]" },
      { titulo: "Em família", texto: "[Como usar em casa.]" },
      { titulo: "Em grupos", texto: "[Como usar em pequenos grupos.]" },
    ],
    passos: passosPadrao(["[Instrução.]", "[Instrução.]", "[Instrução.]", "[Instrução.]"]),
    incluso: ["[Item incluído]", "[Item incluído]"],
    faq: [{ pergunta: "Como recebo o material?", resposta: "[Resposta.]" }],
  },
  {
    slug: "estudos-na-palavra",
    titulo: "Estudos na Palavra",
    subtituloCapa: "Caderno de aprendizagem",
    resumo: "Caderno de aprendizagem com perguntas e atividades para grupos.",
    pilar: "Compreender",
    publicos: ["Professores", "Igrejas"],
    capa: "salvia",
    acessibilidade: {
      tipo: "adaptado",
      titulo: "Inclui versão adaptada",
      texto: "[Descrição da adaptação para crianças autistas.]",
    },
    faixaEtaria: "[idade]",
    formato: "PDF para imprimir",
    paginas: "[nº de páginas]",
    referencias: "[referências bíblicas]",
    preco: "[PREÇO]",
    linkCakto: "#",
    sobre: ["[Descrição do material.]"],
    aplicacao: [
      { titulo: "Na escola dominical", texto: "[Como aplicar.]" },
      { titulo: "Em células", texto: "[Como aplicar.]" },
      { titulo: "Em casa", texto: "[Como aplicar.]" },
    ],
    passos: passosPadrao(["[Instrução.]", "[Instrução.]", "[Instrução.]", "[Instrução.]"]),
    incluso: ["[Item incluído]", "[Item incluído]"],
    faq: [{ pergunta: "Como recebo o material?", resposta: "[Resposta.]" }],
  },
];

export const getMaterial = (slug: string) => materiais.find((m) => m.slug === slug);

export const pilares: { nome: Pilar; descricao: string; formatos: string }[] = [
  { nome: "Conhecer", descricao: "Explorar a Bíblia e seu contexto.", formatos: "Panoramas, mapas, linhas do tempo" },
  { nome: "Compreender", descricao: "Estudar e elaborar significados.", formatos: "Cadernos de estudo, perguntas, atividades" },
  { nome: "Cultivar", descricao: "Desenvolver constância e reflexão.", formatos: "Fichários devocionais, leituras, registros" },
  { nome: "Compartilhar", descricao: "Ajudar outras pessoas a aprender.", formatos: "Recursos para famílias, professores e igrejas" },
];
