# Landing Page Le Ange Mar

Página estática criada para captação de leads da pousada **Le Ange Mar** (Búzios/RJ).

---

## Visão Geral

Esta landing page apresenta os principais diferenciais da pousada e direciona visitantes a preencher um formulário de contato, com foco em conversão.

Demo:  
https://alephsramos-dev.github.io/buzios-pousada-le-ange-lp/

---

## Estrutura do Projeto

```
public/
└── sitemap.xml             # Imagens, ícones e fontes

src/
├── global/
│   ├── reset.css       # Reset de estilo do navegador
│   ├── variables.css   # Variáveis (cores, fontes, espaçamentos)
│   └── global.css      # Estilos globais
│
├── partials/           # Seções da página
│   ├── header.html
│   ├── hero.html
│   ├── about.html
│   ├── features.html
│   ├── form.html
│   └── footer.html
│
├── components/         # Componentes reaproveitáveis
│   ├── button.html
│   └── title.html
│
├── scripts/
│   ├── main.js         # Interações gerais
│   └── formHandler.js  # Validação e envio de formulário
│
└── index.html          # Ponto de entrada
```

---

## Como Executar

1. **Clone**  
   ```bash
   git clone https://github.com/alephsramos-dev/buzios-pousada-le-ange-lp.git
   ```
2. **Abra**  
   - Dê duplo clique em `src/index.html`  
   - Ou, dentro de `src/`, execute:
     ```bash
     python3 -m http.server 8000
     ```
3. **Acesse**  
   Navegador → `http://localhost:8000`

---

## Autor

Aleph Silva Ramos  
📧 alephsramosdev@gmail.com  
💻 https://github.com/alephsramos-dev  
