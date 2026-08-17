# Projeto Integrador — Apresentações

Projeto web para apresentações de Programação, Física e Robótica.
Editar o conteúdo diretamente no VS Code.

---

## Como rodar o projeto

1. Instale o [Bun](https://bun.sh) no seu computador
2. Abra a pasta do projeto no VS Code
3. Abra o terminal do VS Code (`Ctrl + '`)
4. Instale as dependências:
5. Inicie o servidor de desenvolvimento:

6. Abra o navegador no endereço que aparecer no terminal (geralmente `http://localhost:8080`)

---

## Estrutura do projeto
projeto/
├── public/              ← Arquivos estáticos (imagens públicas, ícones)
├── src/
│   ├── paginas/         ← Páginas do site
│   │   ├── Inicio.tsx          ← Página principal (home)
│   │   └── NaoEncontrado.tsx  ← Página 404
│   ├── recursos/        ← Imagens e arquivos de mídia
│   │   └── imagem-principal.jpg
│   ├── App.tsx          ← Define as rotas do site
│   ├── estilos.css      ← Estilos globais (cores, fontes)
│   ├── main.tsx         ← Arquivo que inicia o React
│   └── vite-env.d.ts    ← Tipos do Vite (não editar)
├── index.html           ← HTML base do site
├── package.json         ← Lista de dependências
├── tailwind.config.ts   ← Configuração do Tailwind CSS
├── vite.config.ts       ← Configuração do Vite
└── README.md            ← Este arquivoCódigo