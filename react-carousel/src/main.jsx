import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const projects = [
  {
    id: "projeto1",
    title: "Pagina de Vendas",
    image: "assets/projeto1.png",
    alt: "Captura de tela da pagina de vendas",
    description:
      "Pagina de vendas para curso de front-end, com layout moderno, responsivo e foco em conversao.",
    tech: "HTML5, CSS3, JavaScript",
    link: "pages/projeto1.html"
  },
  {
    id: "projeto2",
    title: "Cortex: Sistema de Agente de IA",
    image: "assets/projeto 2.png",
    alt: "Interface do sistema Cortex",
    description:
      "Ecossistema de produtividade com LLMs e dados de CRM, focado em pipelines eficientes e alta fidelidade.",
    tech: "OpenAI/Anthropic APIs, React.js, Tailwind, Webhooks, HTML5, CSS3, JavaScript",
    link: "pages/projeto2.html"
  },
  {
    id: "projeto3",
    title: "Konekt: CRM Inteligente com Automacao de Leads",
    image: "assets/projeto 3.png",
    alt: "Dashboard do CRM Konekt",
    description:
      "Plataforma CRM com integracao via API/Webhooks e analises em tempo real para automacao de tarefas.",
    tech: "React/Next.js, Node.js, LLMs APIs",
    link: "pages/projeto3.html"
  },
  {
    id: "projeto4",
    title: "Wave Music: Player de Musica Moderno",
    image: "assets/projeto 4.png",
    alt: "Interface do Wave Music Player",
    description:
      "Player de musica com interface moderna, controles completos e visualizacao em tempo real.",
    tech: "HTML5, CSS3, JavaScript, Web Audio API",
    link: "pages/projeto4.html"
  },
  {
    id: "projeto5",
    title: "FisioVida: Gestao para Clinica de Fisioterapia",
    image: "assets/fisiovidaimg.png",
    alt: "Sistema de gestao para clinica de fisioterapia",
    description:
      "Sistema de gestao para agenda, pacientes e evolucao dos atendimentos, com controle das sessoes.",
    tech: "HTML5, CSS3, JavaScript, Node.js",
    link: "pages/projeto5.html"
  },
  {
    id: "projeto6",
    title: "ContaPro: Gestao para Escritorio de Contabilidade",
    image: "assets/contaproimg.png",
    alt: "Sistema de gestao para escritorio de contabilidade",
    description:
      "Gestao de clientes, contratos e rotinas fiscais com foco em produtividade e prazos.",
    tech: "HTML5, CSS3, JavaScript",
    link: "pages/projeto6.html"
  },
  {
    id: "projeto7",
    title: "Netflix Investimentos: Plataforma de Investimento Integrada",
    image: "assets/netfliximg.png",
    alt: "Plataforma de investimento integrada",
    description:
      "Plataforma com BD funcional, APIs bancarias, Pix, cartao e gateway de pagamento, com painel admin.",
    tech: "HTML5, CSS3, JavaScript, API, Banco de Dados, BD Schema",
    link: "pages/projeto7.html"
  },
  {
    id: "projeto8",
    title: "Terraco Burger: Sistema de Pedidos",
    image: "assets/terracoburgerimg.png",
    alt: "Sistema de pedidos para hamburgueria",
    description:
      "Sistema de pedidos com cardapio digital, montagem e fluxo rapido de atendimento.",
    tech: "HTML5, CSS3, JavaScript",
    link: "pages/projeto8.html"
  }
];

function useRafScroll(handler) {
  const rafId = useRef(0);

  return () => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = 0;
      handler();
    });
  };
}

function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef(null);
  const cardsRef = useRef([]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < projects.length - 1;

  const scrollToIndex = (index, smooth = true) => {
    const viewport = viewportRef.current;
    const card = cardsRef.current[index];
    if (!viewport || !card) return;

    const viewportWidth = viewport.clientWidth;
    const cardWidth = card.offsetWidth;
    const left = card.offsetLeft - (viewportWidth / 2 - cardWidth / 2);

    viewport.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  };

  const updateActiveFromScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const onScroll = useRafScroll(updateActiveFromScroll);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    viewport.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useLayoutEffect(() => {
    scrollToIndex(activeIndex, false);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver(() => {
      scrollToIndex(activeIndex, false);
    });

    observer.observe(viewport);

    return () => observer.disconnect();
  }, [activeIndex]);

  const handlePrev = () => {
    if (!canGoPrev) return;
    const nextIndex = activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    const nextIndex = activeIndex + 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const cardClasses = useMemo(() => {
    return projects.map((_, index) => {
      if (index === activeIndex) return "projeto is-active";
      return "projeto is-side";
    });
  }, [activeIndex]);

  return (
    <div className="projetos-carousel">
      <button
        className="carousel-nav prev"
        aria-label="Anterior"
        onClick={handlePrev}
        disabled={!canGoPrev}
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>

      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-track">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={cardClasses[index]}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <img src={project.image} alt={project.alt} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                <li>Tecnologias:</li>
              </ul>
              <p>{project.tech}</p>
              <a href={project.link} className="btn">
                Ver mais
              </a>
            </article>
          ))}
        </div>
      </div>

      <button
        className="carousel-nav next"
        aria-label="Proximo"
        onClick={handleNext}
        disabled={!canGoNext}
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

const rootElement = document.getElementById("projects-carousel");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<ProjectsCarousel />);
}
