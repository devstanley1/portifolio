# Guia de Estilo CSS

## 📐 Arquitetura

Este projeto usa uma arquitetura CSS modular baseada em:
- **ITCSS** (Inverted Triangle CSS) para organização
- **BEM-like** naming para componentes
- **CSS Variables** para theming

## 📁 Estrutura de Importação

```css
1. variables.css    - Variáveis globais
2. base.css        - Reset e estilos base
3. layout.css      - Layouts e containers
4. components/*    - Componentes reutilizáveis
5. sections/*      - Estilos específicos de seções
6. themes/*        - Temas visuais
7. utilities.css   - Classes utilitárias
8. responsive.css  - Media queries
```

## 🎨 Sistema de Design

### Cores
```css
--primary-color: #a259f7;      /* Roxo principal */
--secondary-color: #6a0dad;    /* Roxo escuro */
--background-color: #000;      /* Fundo escuro */
--card-bg: #18181b;           /* Fundo de cards */
--text-color: #fff;           /* Texto principal */
--light-text-color: #bbb;     /* Texto secundário */
```

### Espaçamentos
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
```

### Tipografia
```css
--font-xs: 0.875rem;   /* 14px */
--font-sm: 1rem;       /* 16px */
--font-md: 1.15rem;    /* 18.4px */
--font-lg: 1.3rem;     /* 20.8px */
--font-xl: 2rem;       /* 32px */
--font-2xl: 2.2rem;    /* 35.2px */
--font-3xl: 3.2rem;    /* 51.2px */
```

## 📝 Convenções de Nomenclatura

### Classes de Componentes
```css
.componente { }                 /* Bloco */
.componente__elemento { }       /* Elemento */
.componente--modificador { }    /* Modificador */
```

### Exemplos
```css
.btn { }              /* Componente base */
.btn--primary { }     /* Variante */
.btn--large { }       /* Modificador de tamanho */

.card { }
.card__header { }
.card__body { }
.card--featured { }
```

## 🔧 Padrões de Código

### Ordem de Propriedades
1. Posicionamento (position, top, right, etc)
2. Box Model (display, width, height, padding, margin)
3. Tipografia (font, line-height, text-align)
4. Visual (background, border, box-shadow)
5. Outros (cursor, transform, transition)

### Exemplo
```css
.exemplo {
    /* Posicionamento */
    position: relative;
    top: 0;
    left: 0;
    
    /* Box Model */
    display: flex;
    width: 100%;
    padding: var(--spacing-md);
    margin: 0 auto;
    
    /* Tipografia */
    font-size: var(--font-md);
    line-height: 1.6;
    text-align: center;
    
    /* Visual */
    background: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    /* Outros */
    cursor: pointer;
    transition: var(--transition);
}
```

## 📱 Breakpoints

```css
/* Mobile First Approach */
/* Base: Mobile (< 480px) */

@media (min-width: 481px) {  /* Tablets pequenos */
}

@media (min-width: 768px) {  /* Tablets */
}

@media (min-width: 1024px) { /* Desktop */
}

@media (min-width: 1400px) { /* Desktop Grande */
}
```

## 🎯 Boas Práticas

### ✅ Faça
- Use variáveis CSS para valores reutilizáveis
- Mantenha especificidade baixa
- Use classes semânticas
- Comente seções complexas
- Agrupe media queries por componente

### ❌ Evite
- IDs para estilos
- !important (exceto casos extremos)
- Valores hardcoded
- Seletores muito específicos
- Estilos inline no HTML

## 🔄 Adicionando Novos Estilos

### Novo Componente
1. Crie arquivo em `components/nome-componente.css`
2. Adicione import no `index.html`
3. Use variáveis existentes
4. Documente o componente

### Nova Seção
1. Crie arquivo em `styles/sections/nome-secao.css`
2. Adicione import no `index.html`
3. Siga padrão de nomenclatura

### Novo Tema
1. Crie arquivo em `styles/themes/nome-tema.css`
2. Redefina apenas as variáveis necessárias
3. Teste todos os componentes

## 📚 Recursos

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [ITCSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [BEM Methodology](http://getbem.com/)
