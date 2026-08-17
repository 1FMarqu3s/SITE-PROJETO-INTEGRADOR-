# Projeto Integrador — Apresentações

Projeto web para apresentações de Programação, Física e Robótica.
Editar o conteúdo diretamente no VS Code.

---

bun installCódigo
5. Inicie o servidor de desenvolvimento:bun devCódigo
6. Abra o navegador no endereço que aparecer no terminal (geralmente `http://localhost:8080`)

---

## Estrutura do projetoprojeto/
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
---

## O que você pode editar

### Trocar o título e a descrição

Abra `src/paginas/Inicio.tsx` e procure por:
```tsx
<h1>
  TÍTULO DO
  <br />
  TRABALHO
</h1>

<p>XXXXXXXXXXXXXX (DESCRIÇÃO BÁSICA DO SEU TRABALHO)</p>Troque pelo título e descrição do seu grupo.Trocar a imagem
Coloque sua imagem na pasta src/recursos/
No arquivo src/paginas/Inicio.tsx, troque o nome no import:
import heroImage from "@/recursos/SUA_IMAGEM.jpg";Trocar o vídeo do YouTubeNo arquivo src/paginas/Inicio.tsx, procure por:Código1234const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Convite: Grand Opening" },
  // { id: "OUTRO_ID", title: "Tour pela loja" },
];
Troque o id pelo ID do seu vídeo do YouTube
O ID está na URL: https://www.youtube.com/watch?v=AQUI_ESTÁ_O_ID
Para adicionar mais vídeos, descomente a segunda linha e troque o ID
Trocar as matériasNo arquivo src/paginas/Inicio.tsx, procure por:Código123<p>Programação</p>
<p>Física</p>
<p>Robótica</p>Troque pelas matérias do seu grupo.Trocar as coresAbra src/estilos.css e edite as variáveis na seção :root:Código123--background: 0 0% 100%;        /* Cor de fundo */
--foreground: 220 13% 18%;      /* Cor do texto principal */
--primary: 220 13% 18%;         /* Cor de destaque */Os valores são em formato HSL (Matiz, Saturação, Luminosidade).Comandos disponíveis


ComandoO que fazbun installInstala as dependênciasbun devInicia o servidor de desenvolvimentobun run buildGera a versão final para publicarbun run previewVisualiza a versão finalDúvidasSe algo não funcionar:
Verifique se o Bun está instalado (bun --version)
Tente rodar bun install novamente
Reinicie o servidor com bun dev
Código
