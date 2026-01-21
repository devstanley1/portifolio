# Guia de Contribuição

## 🤝 Como Contribuir

Obrigado pelo interesse em contribuir com este projeto! Este guia ajudará você a começar.

## 📋 Pré-requisitos

- Editor de código (VS Code recomendado)
- Navegador moderno
- Git

## 🚀 Começando

1. **Fork do Repositório**
   ```bash
   # Clone seu fork
   git clone https://github.com/seu-usuario/Portifolio.git
   cd Portifolio
   ```

2. **Crie uma Branch**
   ```bash
   git checkout -b feature/minha-contribuicao
   ```

3. **Faça suas Alterações**
   - Siga o guia de estilo do projeto
   - Mantenha commits pequenos e focados
   - Escreva mensagens de commit descritivas

4. **Teste suas Alterações**
   - Abra o `index.html` no navegador
   - Teste em diferentes resoluções
   - Verifique o tema claro e escuro

5. **Commit e Push**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   git push origin feature/minha-contribuicao
   ```

6. **Abra um Pull Request**
   - Descreva suas alterações
   - Adicione screenshots se relevante
   - Referencie issues relacionadas

## 📝 Padrões de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: apenas documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adição de testes
chore: tarefas de manutenção
```

### Exemplos
```bash
feat: adiciona animação nos cards de projeto
fix: corrige scroll suave no Safari
docs: atualiza README com novos recursos
style: formata código CSS seguindo guia de estilo
refactor: reorganiza componentes JavaScript
```

## 🎨 Adicionando CSS

1. **Identifique o tipo de estilo**
   - Componente? → `components/`
   - Seção? → `styles/sections/`
   - Tema? → `styles/themes/`
   - Utilidade? → `styles/utilities.css`

2. **Crie o arquivo**
   ```css
   /**
    * Nome do Componente
    * Descrição breve
    */
   
   .componente {
       /* Seus estilos */
   }
   ```

3. **Adicione ao index.html**
   ```html
   <link rel="stylesheet" href="caminho/para/arquivo.css">
   ```

4. **Use variáveis CSS**
   ```css
   .componente {
       color: var(--primary-color);
       padding: var(--spacing-md);
   }
   ```

## 💻 Adicionando JavaScript

1. **Crie módulo em `src/js/`**
   ```javascript
   /**
    * Nome do Módulo
    * Descrição breve
    */
   
   class MeuModulo {
       constructor() {
           this.init();
       }
       
       init() {
           // Inicialização
       }
   }
   
   // Inicializa quando DOM estiver pronto
   document.addEventListener('DOMContentLoaded', () => {
       new MeuModulo();
   });
   ```

2. **Adicione script ao index.html**
   ```html
   <script src="src/js/meu-modulo.js"></script>
   ```

## 🐛 Reportando Bugs

Ao reportar bugs, inclua:

1. **Descrição clara** do problema
2. **Passos para reproduzir**
3. **Comportamento esperado**
4. **Comportamento atual**
5. **Screenshots** (se aplicável)
6. **Ambiente** (navegador, versão, SO)

## ✨ Sugerindo Melhorias

Para sugerir melhorias:

1. **Verifique** se já não existe uma issue
2. **Descreva** a melhoria em detalhes
3. **Explique** por que seria útil
4. **Adicione** exemplos ou mockups

## 🧪 Checklist antes do PR

- [ ] Código segue o guia de estilo
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Tema claro e escuro funcionando
- [ ] Sem erros no console
- [ ] Commits seguem padrão conventional
- [ ] Documentação atualizada (se necessário)

## 📚 Recursos Úteis

- [STYLE_GUIDE.md](STYLE_GUIDE.md) - Guia de estilo CSS
- [CODE_REVIEW.md](CODE_REVIEW.md) - Análise de código
- [README.md](README.md) - Documentação geral

## ❓ Dúvidas?

- Abra uma issue com a tag `question`
- Entre em contato: devfull.stanley@gmail.com

## 📜 Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

Obrigado por contribuir! 🎉
