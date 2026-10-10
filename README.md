# Uma Biblicamente — site

Site institucional e catálogo de materiais da editora Uma Biblicamente. As vendas acontecem na Cakto; o site apresenta a editora e detalha cada material.

## Stack

- Next.js (App Router) hospedado no Vercel
- Próximas etapas: Payload CMS para cadastro dos materiais e Supabase (Postgres, storage e, no futuro, área de membros)

## Estrutura

- `app/(site)/` — site institucional, com topo e rodapé: home, `/materiais` (catálogo com filtro por movimento) e `/materiais/[slug]` (página de cada material)
- `app/(lp)/lp/[slug]` — landing pages de venda, sem navegação, uma por produto
- `content/landing-pages.ts` — conteúdo das landing pages, montado em blocos (identificação, mapa, anatomia, galeria, públicos, passos, depoimentos, oferta, garantia, FAQ, fechamento). Para criar uma nova LP, adicione um item ao array e as imagens em `public/lp/<slug>/`
- `components/lp/` — os blocos e o botão de compra (repassa utm_*, src, fbclid e gclid para o link da Cakto)
- `components/` — topo, rodapé, capa, card de material, marca
- `content/materiais.ts` — catálogo provisório (vai para o CMS). Textos entre colchetes são espaços reservados
- `app/globals.css` — tokens de cor e estilos do manual de marca
- `public/marca/` — assinatura recortada do PDF do manual; substituir pelo SVG original

## Rodando localmente

```bash
npm install
npm run dev
```

O site está marcado como `noindex` até o lançamento (ver `app/layout.tsx`).
