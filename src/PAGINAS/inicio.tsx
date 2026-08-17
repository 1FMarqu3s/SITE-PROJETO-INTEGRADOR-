import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/IMAGENS/imagem-principal.jpg";

// Edite aqui: adicione ou remova vídeos. Basta o ID do YouTube.
const VIDEOS = [
  { id: "4JWAVblw4E0", title: "TITULO DO VIDEO AQUI (MUSICA" },
  // { id: "OUTRO_ID", title: "Tour pela loja" },
];

const Inicio = () => {
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const video = videoIndex !== null ? VIDEOS[videoIndex] : null;

  const openVideo = () => setVideoIndex(0);
  const closeVideo = () => setVideoIndex(null);

  const buttonClass =
    "px-10 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero em tela cheia */}
      <div className="relative w-full h-screen min-h-[600px]">
        <img
          src={heroImage}
          alt="Interior de loja de decoração com cerâmicas, têxteis e móveis de madeira"
          className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/35" />

        <header className="absolute top-0 left-0 right-0 z-50 animate-fade-in">
          <div className="flex items-center h-16 max-w-6xl mx-auto px-6 md:px-12">
            <span className="font-bold text-lg md:text-xl text-white">Projeto Integrador</span>
          </div>
        </header>

        <div className="absolute inset-0 flex items-center pt-16">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
              <div>
                <p className="uppercase text-sm md:text-base font-semibold tracking-[0.15em] text-white/80 mb-6">
                  APRESENTAÇÕES
                </p>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-8 leading-[1.05] animate-fade-up">
                  TÍTULO DO
                  <br />
                  TRABALHO
                </h1>

                <p className="text-sm md:text-base leading-relaxed text-white/75 max-w-lg">
                  XXXXXXXXXXXXXX (DESCRIÇÃO BÁSICA DO SEU TRABALHO)
                </p>
              </div>

              {/* Contato + CTA (desktop) */}
              <div className="hidden md:flex flex-col gap-6 text-white pt-4">
                <div className="leading-relaxed font-medium space-y-1">
                  <p>Programação</p>
                  <p>Física</p>
                  <p>Robótica</p>
                </div>

                <button onClick={openVideo} className={`${buttonClass} bg-white text-foreground hover:bg-white/90`}>
                  ▶ Assistir vídeo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matérias + CTA (mobile) */}
      <div className="md:hidden bg-foreground text-background px-6 py-8 space-y-4 text-sm">
        <div className="leading-relaxed font-medium space-y-1">
          <p>Programação</p>
          <p>Física</p>
          <p>Robótica</p>
        </div>
        <button onClick={openVideo} className={`${buttonClass} w-full bg-background text-foreground`}>
          ▶ Assistir vídeo
        </button>
      </div>

      {/* Player do vídeo */}
      {video && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 animate-overlay-in" onClick={closeVideo} />

          <div className="relative w-full max-w-3xl animate-dialog-in">
            <button
              onClick={closeVideo}
              aria-label="Fechar vídeo"
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {VIDEOS.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {VIDEOS.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setVideoIndex(i)}
                    className={`px-3 py-1.5 text-xs rounded-sm ${
                      i === videoIndex ? "bg-white text-foreground" : "bg-white/20 text-white"
                    }`}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            )}

            <div className="aspect-video w-full bg-black rounded-sm overflow-hidden">
              <iframe
                key={video.id}
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;