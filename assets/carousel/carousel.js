(function () {
    if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
        return;
    }

    var useState = React.useState;
    var useRef = React.useRef;
    var useEffect = React.useEffect;
    var useLayoutEffect = React.useLayoutEffect;

    var projects = [
        {
            id: "projeto1",
            title: "Pagina de Vendas",
            image: "assets/projeto1.png",
            alt: "Captura de tela da pagina de vendas",
            description: "Pagina de vendas para curso de front-end, com layout moderno, responsivo e foco em conversao.",
            tech: "HTML5, CSS3, JavaScript",
            link: "pages/projeto1.html"
        },
        {
            id: "projeto2",
            title: "Cortex: Sistema de Agente de IA",
            image: "assets/projeto 2.png",
            alt: "Interface do sistema Cortex",
            description: "Ecossistema de produtividade com LLMs e dados de CRM, focado em pipelines eficientes e alta fidelidade.",
            tech: "OpenAI/Anthropic APIs, React.js, Tailwind, Webhooks, HTML5, CSS3, JavaScript",
            link: "pages/projeto2.html"
        },
        {
            id: "projeto3",
            title: "Konekt: CRM Inteligente com Automacao de Leads",
            image: "assets/projeto 3.png",
            alt: "Dashboard do CRM Konekt",
            description: "Plataforma CRM com integracao via API/Webhooks e analises em tempo real para automacao de tarefas.",
            tech: "React/Next.js, Node.js, LLMs APIs",
            link: "pages/projeto3.html"
        },
        {
            id: "projeto4",
            title: "Wave Music: Player de Musica Moderno",
            image: "assets/projeto 4.png",
            alt: "Interface do Wave Music Player",
            description: "Player de musica com interface moderna, controles completos e visualizacao em tempo real.",
            tech: "HTML5, CSS3, JavaScript, Web Audio API",
            link: "pages/projeto4.html"
        },
        {
            id: "projeto5",
            title: "FisioVida: Gestao para Clinica de Fisioterapia",
            image: "assets/fisiovidaimg.png",
            alt: "Sistema de gestao para clinica de fisioterapia",
            description: "Sistema de gestao para agenda, pacientes e evolucao dos atendimentos, com controle das sessoes.",
            tech: "HTML5, CSS3, JavaScript, Node.js",
            link: "pages/projeto5.html"
        },
        {
            id: "projeto6",
            title: "ContaPro: Gestao para Escritorio de Contabilidade",
            image: "assets/contaproimg.png",
            alt: "Sistema de gestao para escritorio de contabilidade",
            description: "Gestao de clientes, contratos e rotinas fiscais com foco em produtividade e prazos.",
            tech: "HTML5, CSS3, JavaScript",
            link: "pages/projeto6.html"
        },
        {
            id: "projeto7",
            title: "Netflix Investimentos: Plataforma de Investimento Integrada",
            image: "assets/netfliximg.png",
            alt: "Plataforma de investimento integrada",
            description: "Plataforma com BD funcional, APIs bancarias, Pix, cartao e gateway de pagamento, com painel admin.",
            tech: "HTML5, CSS3, JavaScript, API, Banco de Dados, BD Schema",
            link: "pages/projeto7.html"
        },
        {
            id: "projeto8",
            title: "Terraco Burger: Sistema de Pedidos",
            image: "assets/terracoburgerimg.png",
            alt: "Sistema de pedidos para hamburgueria",
            description: "Sistema de pedidos com cardapio digital, montagem e fluxo rapido de atendimento.",
            tech: "HTML5, CSS3, JavaScript",
            link: "pages/projeto8.html"
        }
    ];

    function ProjectsCarousel() {
        var _useState = useState(0);
        var activeIndex = _useState[0];
        var setActiveIndex = _useState[1];

        var viewportRef = useRef(null);
        var cardsRef = useRef([]);
        var rafRef = useRef(0);

        var canGoPrev = activeIndex > 0;
        var canGoNext = activeIndex < projects.length - 1;

        var scrollToIndex = function (index, smooth) {
            var viewport = viewportRef.current;
            var card = cardsRef.current[index];
            if (!viewport || !card) return;

            var viewportWidth = viewport.clientWidth;
            var cardWidth = card.offsetWidth;
            var left = card.offsetLeft - (viewportWidth / 2 - cardWidth / 2);

            viewport.scrollTo({ left: left, behavior: smooth ? "smooth" : "auto" });
        };

        var updateActiveFromScroll = function () {
            var viewport = viewportRef.current;
            if (!viewport) return;

            var viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
            var closestIndex = 0;
            var minDistance = Number.POSITIVE_INFINITY;

            cardsRef.current.forEach(function (card, index) {
                if (!card) return;
                var cardCenter = card.offsetLeft + card.offsetWidth / 2;
                var distance = Math.abs(cardCenter - viewportCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== activeIndex) {
                setActiveIndex(closestIndex);
            }
        };

        var onScroll = function () {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(function () {
                rafRef.current = 0;
                updateActiveFromScroll();
            });
        };

        useEffect(function () {
            var viewport = viewportRef.current;
            if (!viewport) return;

            viewport.addEventListener("scroll", onScroll, { passive: true });
            return function () {
                viewport.removeEventListener("scroll", onScroll);
            };
        }, [activeIndex]);

        useLayoutEffect(function () {
            scrollToIndex(activeIndex, false);
        }, []);

        useEffect(function () {
            var viewport = viewportRef.current;
            if (!viewport || typeof ResizeObserver === "undefined") return;

            var observer = new ResizeObserver(function () {
                scrollToIndex(activeIndex, false);
            });

            observer.observe(viewport);

            return function () {
                observer.disconnect();
            };
        }, [activeIndex]);

        var handlePrev = function () {
            if (!canGoPrev) return;
            var nextIndex = activeIndex - 1;
            setActiveIndex(nextIndex);
            scrollToIndex(nextIndex, true);
        };

        var handleNext = function () {
            if (!canGoNext) return;
            var nextIndex = activeIndex + 1;
            setActiveIndex(nextIndex);
            scrollToIndex(nextIndex, true);
        };

        return React.createElement(
            "div",
            { className: "projetos-carousel" },
            React.createElement(
                "button",
                {
                    className: "carousel-nav prev",
                    onClick: handlePrev,
                    disabled: !canGoPrev,
                    "aria-label": "Anterior"
                },
                React.createElement("i", { className: "fas fa-chevron-left", "aria-hidden": "true" })
            ),
            React.createElement(
                "div",
                { className: "carousel-viewport", ref: viewportRef },
                React.createElement(
                    "div",
                    { className: "carousel-track" },
                    projects.map(function (project, index) {
                        var cardClass = index === activeIndex ? "projeto is-active" : "projeto is-side";
                        return React.createElement(
                            "article",
                            {
                                key: project.id,
                                className: cardClass,
                                ref: function (el) {
                                    cardsRef.current[index] = el;
                                }
                            },
                            React.createElement("img", { src: project.image, alt: project.alt, loading: "lazy" }),
                            React.createElement("h3", null, project.title),
                            React.createElement("p", null, project.description),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement("li", null, "Tecnologias:")
                            ),
                            React.createElement("p", null, project.tech),
                            React.createElement(
                                "a",
                                { href: project.link, className: "btn" },
                                "Ver mais"
                            )
                        );
                    })
                )
            ),
            React.createElement(
                "button",
                {
                    className: "carousel-nav next",
                    onClick: handleNext,
                    disabled: !canGoNext,
                    "aria-label": "Proximo"
                },
                React.createElement("i", { className: "fas fa-chevron-right", "aria-hidden": "true" })
            )
        );
    }

    var rootElement = document.getElementById("projects-carousel");
    if (rootElement) {
        if (ReactDOM.createRoot) {
            var root = ReactDOM.createRoot(rootElement);
            root.render(React.createElement(ProjectsCarousel));
        } else if (ReactDOM.render) {
            ReactDOM.render(React.createElement(ProjectsCarousel), rootElement);
        }
    }
})();
