// Landing pages de venda: uma por produto, montadas em blocos.
// Cada bloco vira um componente em components/lp/Blocos.tsx. A ordem do array é a ordem na página.
// Quando o CMS entrar, este mesmo formato vira o "construtor de blocos" do painel.
// Textos entre colchetes são espaços reservados a preencher antes de anunciar.

export interface Imagem {
  src: string;
  alt: string;
}

export interface Oferta {
  preco: string;
  precoDe?: string; // preço "de", riscado — usar só se for real
  condicao?: string; // ex.: "ou 3x de R$ 9,90"
  linkCheckout: string; // link do produto na Cakto
  textoBotao: string;
}

export type Bloco =
  | { tipo: "identificacao"; titulo: string; itens: string[]; virada: string }
  | { tipo: "mapa"; rotulo: string; titulo: string; texto: string; imagem: Imagem; divisoes: string[] }
  | { tipo: "anatomia"; rotulo: string; titulo: string; imagem: Imagem; pontos: { titulo: string; texto: string }[] }
  | { tipo: "galeria"; rotulo: string; titulo: string; imagens: Imagem[] }
  | { tipo: "publicos"; rotulo: string; titulo: string; itens: { titulo: string; texto: string }[] }
  | { tipo: "passos"; rotulo: string; titulo: string; itens: { titulo: string; texto: string }[] }
  | { tipo: "depoimentos"; titulo: string; itens: { texto: string; nome: string; contexto: string }[] }
  | { tipo: "oferta"; titulo: string; incluso: string[] }
  | { tipo: "garantia"; titulo: string; texto: string }
  | { tipo: "faq"; titulo: string; itens: { pergunta: string; resposta: string }[] }
  | { tipo: "fechamento"; titulo: string; texto: string };

export interface LandingPage {
  slug: string;
  seo: { titulo: string; descricao: string; imagem: string };
  hero: {
    rotulo: string;
    titulo: string;
    subtitulo: string;
    microcopia: string;
    imagens: Imagem[]; // 1 a 3 páginas do material, empilhadas
  };
  oferta: Oferta;
  blocos: Bloco[];
}

const base = "/lp/panorama-do-antigo-testamento";

export const landingPages: LandingPage[] = [
  {
    slug: "panorama-do-antigo-testamento",
    seo: {
      titulo: "Panorama do Antigo Testamento",
      descricao:
        "Um mapa visual do Antigo Testamento, livro a livro, com as grandes histórias, os capítulos de cada uma e um resumo simples para ler com as crianças.",
      imagem: `${base}/classificacao.webp`,
    },
    hero: {
      rotulo: "E-book · Panorama do Antigo Testamento",
      titulo: "O Antigo Testamento inteiro, contado de um jeito que a criança entende.",
      subtitulo:
        "Um mapa visual, livro a livro, com as grandes histórias, os capítulos de cada uma e um resumo simples para ler junto com seus filhos ou com a sua turma.",
      microcopia: "PDF com 43 páginas · acesso enviado por e-mail logo após a compra",
      imagens: [
        { src: `${base}/salmos.webp`, alt: "Página de Salmos do material" },
        { src: `${base}/classificacao.webp`, alt: "Página com a classificação dos livros do Antigo Testamento" },
        { src: `${base}/genesis.webp`, alt: "Página de Gênesis com as quatro primeiras partes do livro" },
      ],
    },
    oferta: {
      preco: "[PREÇO]",
      linkCheckout: "#", // TODO: link do produto na Cakto
      textoBotao: "Quero o Panorama",
    },
    blocos: [
      {
        tipo: "identificacao",
        titulo: "Ensinar a Bíblia para crianças não precisa começar pelo versículo solto.",
        itens: [
          "A criança conhece Noé, Davi e Jonas, mas não sabe onde cada história se encaixa.",
          "Você quer conversar sobre a Bíblia em casa e não sabe por onde começar.",
          "Na escola dominical, falta um material que mostre o todo antes das partes.",
        ],
        virada: "O Panorama mostra o caminho inteiro primeiro. Depois, cada história ganha o seu lugar.",
      },
      {
        tipo: "mapa",
        rotulo: "Comece pelo mapa",
        titulo: "Antes dos livros, a visão do todo.",
        texto:
          "A primeira página organiza o Antigo Testamento em cinco grupos, cada um com sua cor. A criança entende que a Bíblia é uma biblioteca, e que cada livro tem um papel na grande história de Deus.",
        imagem: { src: `${base}/classificacao.webp`, alt: "Mapa de classificação dos livros do Antigo Testamento" },
        divisoes: ["Pentateuco", "Históricos", "Poéticos", "Profetas Maiores", "Profetas Menores"],
      },
      {
        tipo: "anatomia",
        rotulo: "Como é cada página",
        titulo: "Um livro por página, tudo o que importa à vista.",
        imagem: { src: `${base}/genesis.webp`, alt: "Página de Gênesis" },
        pontos: [
          { titulo: "O livro e seu tamanho", texto: "Quantos capítulos e versículos ele tem." },
          { titulo: "A época", texto: "Quando o livro foi escrito, para situar a história no tempo." },
          { titulo: "As grandes partes", texto: "As histórias principais, cada uma com a referência dos capítulos." },
          { titulo: "Um resumo para ler junto", texto: "Linguagem simples, fiel ao texto bíblico, para contar em poucos minutos." },
        ],
      },
      {
        tipo: "galeria",
        rotulo: "Por dentro do material",
        titulo: "Veja algumas páginas.",
        imagens: [
          { src: `${base}/capa.webp`, alt: "Capa do Panorama do Antigo Testamento" },
          { src: `${base}/classificacao.webp`, alt: "Classificação dos livros" },
          { src: `${base}/genesis.webp`, alt: "Página de Gênesis" },
          { src: `${base}/exodo.webp`, alt: "Página de Êxodo" },
          { src: `${base}/salmos.webp`, alt: "Página de Salmos" },
          { src: `${base}/daniel.webp`, alt: "Página de Daniel" },
        ],
      },
      {
        tipo: "publicos",
        rotulo: "Para quem é",
        titulo: "Feito para quem ensina, em casa ou na igreja.",
        itens: [
          { titulo: "Famílias", texto: "Para o culto doméstico ou a leitura antes de dormir: um livro por vez, sem pressa." },
          { titulo: "Professores de escola dominical", texto: "Para apresentar o contexto antes da aula e revisar o que a turma já estudou." },
          { titulo: "Ministério infantil", texto: "Para projetar na sala e percorrer o Antigo Testamento ao longo do trimestre." },
          { titulo: "Crianças que já leem", texto: "Para consultar sozinhas quando aparecer um livro novo na leitura bíblica." },
        ],
      },
      {
        tipo: "passos",
        rotulo: "Como usar",
        titulo: "Leia, abra a Bíblia, converse e registre.",
        itens: [
          { titulo: "Leia", texto: "Leia o resumo de uma parte do livro junto com a criança." },
          { titulo: "Abra a Bíblia", texto: "Procurem juntos os capítulos indicados e leiam um trecho." },
          { titulo: "Converse", texto: "O que Deus fez nessa história? O que ela nos ensina hoje?" },
          { titulo: "Registre", texto: "A criança desenha ou escreve o que mais chamou atenção." },
        ],
      },
      { tipo: "depoimentos", titulo: "Quem já usa", itens: [] }, // preencher só com depoimentos reais
      {
        tipo: "oferta",
        titulo: "Tudo o que você recebe",
        incluso: [
          "E-book em PDF com 43 páginas, em formato paisagem",
          "Mapa de classificação com as cinco divisões do Antigo Testamento",
          "Uma página por livro, com capítulos, versículos, época e resumo de cada parte",
          "Gênesis e Êxodo em duas páginas, pela quantidade de histórias",
          "Para usar na tela (celular, tablet ou TV) ou imprimir",
        ],
      },
      {
        tipo: "garantia",
        titulo: "7 dias de garantia",
        texto:
          "Se o material não for o que você esperava, peça o reembolso em até 7 dias após a compra e devolvemos o valor integral.",
      },
      {
        tipo: "faq",
        titulo: "Perguntas frequentes",
        itens: [
          { pergunta: "Como recebo o material?", resposta: "Assim que o pagamento é confirmado, você recebe por e-mail o acesso ao PDF." },
          {
            pergunta: "Preciso imprimir?",
            resposta: "Não. O material foi feito em formato paisagem, ótimo para ver no celular, tablet ou TV. Se preferir imprimir, use folha A4 na horizontal.",
          },
          { pergunta: "Para qual idade é indicado?", resposta: "[faixa etária indicada]" },
          {
            pergunta: "Posso usar na igreja?",
            resposta: "Sim, para ensinar sua família ou sua turma. O arquivo é de uso de quem compra: não é permitido repassar, vender ou distribuir o PDF.",
          },
        ],
      },
      {
        tipo: "fechamento",
        titulo: "Mostre o caminho inteiro. Deixe cada história encontrar seu lugar.",
        texto: "Do Gênesis aos Profetas, um livro por vez, com a Bíblia aberta ao lado.",
      },
    ],
  },
];

export const getLandingPage = (slug: string) => landingPages.find((lp) => lp.slug === slug);
