import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Pagina de Vendas",
    category: "Landing Page",
    description:
      "Pagina de vendas para curso de programacao, com foco em conversao e experiencia clara.",
    cta: "Ver mais",
    href: "pages/projeto1.html",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Cortex: Sistema de Agente de IA",
    category: "IA e CRM",
    description:
      "Ecossistema com LLMs e CRM, pipelines de dados e integracoes com alta fidelidade.",
    cta: "Ver mais",
    href: "pages/projeto2.html",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Konekt: CRM Inteligente",
    category: "CRM",
    description:
      "Plataforma CRM com automacao de leads, integracoes via API e analise em tempo real.",
    cta: "Ver mais",
    href: "pages/projeto3.html",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Wave Music: Player Moderno",
    category: "Entertainment",
    description:
      "Player de musica com controles completos, UI moderna e foco em experiencia do usuario.",
    cta: "Ver mais",
    href: "pages/projeto4.html",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "FisioVida: Gestao de Clinica",
    category: "Saude",
    description:
      "Gestao de pacientes, agendas e evolucao de sessoes com foco em operacao diaria.",
    cta: "Ver mais",
    href: "pages/projeto5.html",
    image:
      "https://images.unsplash.com/photo-1504814532849-927af9d1c8b9?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "ContaPro: Gestao Contabil",
    category: "Financeiro",
    description:
      "Organizacao de clientes, contratos e rotinas fiscais com controle de prazos.",
    cta: "Ver mais",
    href: "pages/projeto6.html",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Netflix Investimento",
    category: "Investimentos",
    description:
      "Plataforma com integracoes bancarias, Pix, cartao e painel admin.",
    cta: "Ver mais",
    href: "pages/projeto7.html",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Terraco Burger",
    category: "Food Service",
    description:
      "Sistema de pedidos com cardapio digital, carrinho e fluxo de atendimento rapido.",
    cta: "Ver mais",
    href: "pages/projeto8.html",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
  }
];

const clampOffset = (offset, total) => {
  const half = Math.floor(total / 2);
  if (offset > half) return offset - total;
  if (offset < -half) return offset + total;
  return offset;
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return undefined;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isHovered]);

  const positions = useMemo(() => {
    return slides.map((_, index) => clampOffset(index - activeIndex, slides.length));
  }, [activeIndex]);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="relative mt-10 flex min-h-[460px] items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[460px] w-full max-w-6xl">
        {slides.map((slide, index) => {
          const offset = positions[index];
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;
          const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.85;
          const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.65 : 0.35;
          const blur = isActive ? "blur-0" : "blur-sm";
          const translateX = `${offset * 60}%`;

          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`absolute left-1/2 top-1/2 flex h-full w-[85%] -translate-x-1/2 -translate-y-1/2 items-end overflow-hidden rounded-3xl text-left transition-all duration-700 ease-in-out md:w-[60%] ${
                isVisible ? "pointer-events-auto" : "pointer-events-none opacity-0"
              }`}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}) scale(${scale})`,
                opacity,
                zIndex: isActive ? 20 : 10 - Math.abs(offset)
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover ${blur}`}
              />
              <div className="absolute inset-0 carousel-gradient" />
              {isActive && (
                <div className="relative z-10 w-full px-6 pb-8 text-white md:px-10 md:pb-10 animate-slide-up">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    {slide.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
                    {slide.description}
                  </p>
                  <a
                    href={slide.href}
                    className="mt-5 inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-black transition hover:bg-white"
                  >
                    {slide.cta}
                  </a>
                </div>
              )}
              {!isActive && (
                <div className="relative z-10 w-full px-6 pb-8 text-white/70">
                  <h3 className="text-lg font-semibold md:text-xl">{slide.title}</h3>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
        aria-label="Proximo slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`dot-${index}`}
              type="button"
              className={`h-2 rounded-full bg-white/70 transition-all ${
                isActive ? "w-8" : "w-3"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
