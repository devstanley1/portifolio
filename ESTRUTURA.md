# Estrutura do Projeto

```
Portifolio/
│
├── index.html                 # Página principal (otimizada)
├── README.md                  # Documentação principal
├── CODE_REVIEW.md            # Análise de code review
├── STYLE_GUIDE.md            # Guia de estilo CSS
├── CONTRIBUTING.md           # Guia de contribuição
├── .gitignore                # Arquivos ignorados pelo Git
├── script.js                 # Script legacy (deprecated)
│
├── assets/                   # Recursos de mídia
│   ├── projeto1.png
│   ├── projeto 2.png
│   ├── projeto 3.png
│   └── projeto4.png
│
├── backup/                   # Arquivos de backup
│   └── style.css.old
│
├── components/               # CSS de componentes
│   ├── navbar.css           # Navegação
│   ├── button.css           # Botões
│   ├── project-card.css     # Cards de projeto
│   └── footer.css           # Rodapé
│
├── styles/                   # Estilos globais
│   ├── variables.css        # Variáveis CSS
│   ├── base.css            # Reset e base
│   ├── layout.css          # Estruturas de layout
│   ├── utilities.css       # Classes utilitárias
│   ├── responsive.css      # Media queries
│   │
│   ├── sections/           # Estilos por seção
│   │   ├── intro.css
│   │   ├── about.css
│   │   ├── projects.css
│   │   └── contact.css
│   │
│   └── themes/             # Temas visuais
│       └── light.css
│
├── src/                     # Código fonte JavaScript
│   └── js/
│       ├── main.js         # Ponto de entrada
│       ├── theme-toggle.js # Gerenciador de temas
│       ├── smooth-scroll.js # Navegação suave
│       └── form-handler.js  # Formulários
│
├── pages/                   # Páginas dos projetos
│   ├── pages-style.css
│   ├── projeto1.html
│   ├── projeto2.html
│   ├── projeto3.html
│   ├── projeto4.html
│   ├── projeto5.html
│   └── projeto6.html
│
├── react/                   # Componentes React (futuro)
│   └── react.jsx
│
└── utils/                   # Utilitários (vazio)
```

## 📊 Estatísticas

- **Total de Arquivos**: ~35
- **Arquivos HTML**: 8
- **Arquivos CSS**: 14
- **Arquivos JS**: 4
- **Arquivos MD**: 4
- **Imagens**: 4

## 🎯 Arquivos Principais

### HTML
- `index.html` - Página principal otimizada

### CSS (Modularizado)
1. `styles/variables.css` - Sistema de design
2. `styles/base.css` - Estilos fundamentais
3. `styles/layout.css` - Layouts
4. `components/*.css` - Componentes (4 arquivos)
5. `styles/sections/*.css` - Seções (4 arquivos)
6. `styles/themes/light.css` - Tema claro
7. `styles/utilities.css` - Utilidades
8. `styles/responsive.css` - Responsividade

### JavaScript (Modular)
1. `src/js/main.js` - Configurações
2. `src/js/theme-toggle.js` - Temas
3. `src/js/smooth-scroll.js` - Scroll suave
4. `src/js/form-handler.js` - Formulários

### Documentação
1. `README.md` - Visão geral
2. `CODE_REVIEW.md` - Análise técnica
3. `STYLE_GUIDE.md` - Padrões CSS
4. `CONTRIBUTING.md` - Como contribuir

## 🔧 Ordem de Carregamento

### CSS (no index.html)
```html
1. variables.css
2. base.css
3. layout.css
4. navbar.css
5. button.css
6. project-card.css
7. footer.css
8. intro.css
9. about.css
10. projects.css
11. contact.css
12. light.css
13. responsive.css
```

### JavaScript (no index.html)
```html
1. main.js
2. theme-toggle.js
3. smooth-scroll.js
4. form-handler.js
```

## 📝 Notas

- Arquivos em `backup/` são versões antigas
- `script.js` está deprecated
- Pastas `react/` e `utils/` estão preparadas para uso futuro
- Todos os arquivos CSS são modulares e independentes
- JavaScript usa classes ES6 e módulos
