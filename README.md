Documentação Técnica - FERNANDO MARQUES
PROJETO INTEGRADOR — README

Guia de configuração, execução e edição do projeto

17 de agosto de 2026

---

### 1. Projeto Integrador — Apresentações

Projeto web desenvolvido para apresentações das disciplinas de Programação, Física e Robótica. A aplicação utiliza tecnologias modernas para garantir performance e facilidade de customização pelos alunos.

Desenvolvido com: React, TypeScript, Vite, Tailwind CSS e Bun.

### 2. Como rodar o projeto

1. Instale o **Bun** (bun.sh) no seu computador.
2. Abra a pasta do projeto no **VS Code**.
3. Abra o terminal do VS Code (`Ctrl + '`).
4. Instale as dependências: `bun install`
5. Inicie o servidor de desenvolvimento: `bun dev`
6. Abra o navegador no endereço que aparecer no terminal (geralmente `http://localhost:8080`).

### 3. Estrutura do projeto

```text
projeto/
├── public/              ← Arquivos estáticos (vazia por padrão)
├── src/
│   ├── IMAGENS/         ← Imagens e arquivos de mídia
│   │   └── imagem-principal.jpg
│   ├── PAGINAS/         ← Páginas do site
│   │   ├── inicio.tsx          ← Página principal (home)
│   │   └── NaoEncontrado.tsx   ← Página 404
│   ├── App.tsx          ← Define as rotas do site
│   ├── estilos.css      ← Estilos globais (cores, fontes)
│   ├── main.tsx         ← Arquivo que inicia o React
│   └── vite-env.d.ts    ← Tipos do Vite (não editar)
├── index.html           ← HTML base do site
├── package.json         ← Lista de dependências
├── tailwind.config.ts   ← Configuração do Tailwind CSS
├── vite.config.ts       ← Configuração do Vite
└── README.md            ← Este arquivo
```

### 4. O que você pode editar

#### 4.1 Trocar o título e a descrição
Abra src/PAGINAS/inicio.tsx e procure pelo bloco de código abaixo para realizar as alterações de texto do seu grupo:

```tsx

  TÍTULO DO
  
  TRABALHO


XXXXXXXXXXXXXX (DESCRIÇÃO BÁSICA DO SEU TRABALHO)
```

#### 4.2 Trocar a imagem
1. Coloque sua imagem na pasta `src/IMAGENS/`.
2. No arquivo `src/PAGINAS/inicio.tsx`, troque o nome no import:
`import heroImage from "@/IMAGENS/SUA_IMAGEM.jpg";`

#### 4.3 Trocar o vídeo do YouTube
No arquivo src/PAGINAS/inicio.tsx, localize a constante de vídeos. O ID pode ser encontrado na URL do vídeo após o parâmetro v=.

```tsx
const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Convite: Grand Opening" },
  // { id: "OUTRO_ID", title: "Tour pela loja" },
];
```

#### 4.4 Trocar as matérias
Localize os parágrafos abaixo em src/PAGINAS/inicio.tsx e substitua pelos nomes das matérias do seu projeto:

```html
Programação
Física
Robótica
```

#### 4.5 Trocar as cores
Abra src/estilos.css e edite as variáveis na seção :root. Os valores utilizam o formato HSL (Matiz, Saturação, Luminosidade).

```css
--background: 0 0% 100%;        /* Cor de fundo */
--foreground: 220 13% 18%;      /* Cor do texto principal */
--primary: 220 13% 18%;         /* Cor de destaque */
--muted: 220 13% 95%;           /* Cor de fundo suave */
--muted-foreground: 220 9% 46%; /* Cor de texto suave */
```

### 5. Comandos disponíveis

Utilize os comandos abaixo no terminal para gerenciar o ciclo de vida do projeto:

*   **`bun install`**: Instala todas as dependências necessárias.
*   **`bun dev`**: Inicia o ambiente de desenvolvimento com Hot Module Replacement (HMR).
*   **`bun run build`**: Compila e otimiza o projeto para produção.
*   **`bun run preview`**: Visualiza localmente o build final gerado.

### 6. Tecnologias usadas

*   **React**: Biblioteca para construção de interfaces de usuário.
*   **TypeScript**: Adiciona tipagem estática ao JavaScript, reduzindo erros.
*   **Vite**: Ferramenta de build extremamente rápida para projetos modernos.
*   **Tailwind CSS**: Framework CSS para estilização rápida via classes utilitárias.
*   **Bun**: Runtime "all-in-one" e gerenciador de pacotes ultra veloz.
*   **React Router**: Gerenciamento de navegação e rotas dinâmicas.
*   **Lucide React**: Biblioteca de ícones leves e consistentes.

### 7. Dúvidas e Solução de Problemas

Caso encontre dificuldades técnicas, siga os passos de verificação abaixo:

1. Verifique se o Bun está instalado corretamente executando `bun --version`.
2. Tente limpar o cache e reinstalar as dependências com `bun install`.
3. Reinicie o processo de desenvolvimento com `bun dev`.
4. Se o VS Code indicar erros sublinhados em vermelho, verifique os detalhes na aba **"Problems"** (`Ctrl + Shift + M`).

---

*Documento elaborado em 17 de agosto de 2026. As informações contidas são de responsabilidade do solicitante.*