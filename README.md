# Projeto de estudo — Landing Page "Grand Opening"

Site de página única (React + Vite + TypeScript + Tailwind CSS) com hero em tela cheia
e um formulário de RSVP em modal.

## Como rodar

```sh
npm install
npm run dev
```

O site abre em `http://localhost:8080`.

Scripts disponíveis:

- `npm run dev` — servidor de desenvolvimento com recarga automática
- `npm run build` — gera a versão de produção na pasta `dist`
- `npm run preview` — serve localmente a versão de produção

## Estrutura das pastas

```text
index.html              página base (título, descrição, fonte Nunito)
src/
  main.tsx              ponto de entrada: monta o React no #root
  App.tsx               rotas do site ("/" e página 404)
  index.css             Tailwind + variáveis de cor (tema)
  pages/
    Index.tsx           página principal: hero, contato e modal de RSVP
    NotFound.tsx        página 404
  assets/
    hero-home-decor.jpg imagem de fundo do hero
tailwind.config.ts      cores, animações e configuração do Tailwind
```

## Onde mexer primeiro

- **Textos, datas e endereço:** `src/pages/Index.tsx`
- **Cores do tema:** variáveis `--background`, `--foreground`, `--primary` em `src/index.css`
- **Animações (`animate-fade-up`, `animate-ken-burns`, ...):** `tailwind.config.ts`
- **Imagem do hero:** troque o arquivo em `src/assets/` e ajuste o `import` no topo de `Index.tsx`

## Observações

Este projeto foi enxugado para fins didáticos: contém apenas o necessário para funcionar.
Se precisar de componentes prontos (botões, diálogos, formulários), a biblioteca
[shadcn/ui](https://ui.shadcn.com) pode ser adicionada depois com
`npx shadcn@latest init`.
