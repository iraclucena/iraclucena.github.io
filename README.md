# Site acadêmico — Ivana Lucena

Site estático (HTML + CSS + JS), bilíngue PT/EN, pronto para o GitHub Pages.

## Estrutura
- `index.html` – Início · `pesquisa.html` – Pesquisa · `publicacoes.html` – Publicações
- `cv.html` – CV · `contato.html` – Contato · `miscelanea.html` – Miscelânea
- `assets/style.css` – cores e estilo (as cores ficam no topo, em `:root`)
- `assets/main.js` – botão de idioma, menu no celular, busca/filtro de publicações

## Como editar
- **Textos bilíngues:** cada texto aparece duas vezes:
  `<span lang="pt">Texto em português</span><span lang="en">English text</span>`
- **Foto:** coloque `assets/foto.jpg` e, em `index.html`, troque
  `<div class="photo-placeholder" ...>IL</div>` por `<img src="assets/foto.jpg" alt="Ivana Lucena">`.
- **CV em PDF:** salve como `assets/cv.pdf`.
- **Nova publicação:** copie um bloco `<article class="pub" data-type="journal">…</article>`
  dentro do ano certo. `data-type` pode ser `journal`, `conference` ou `preprint`.
- **Links:** troque os `href="#"` pelos seus links (Lattes, Scholar, ORCID, DOI…).

## Publicar no GitHub Pages
1. Crie um repositório chamado **`SEU-USUARIO.github.io`** (público).
2. Envie todos estes arquivos para a raiz do repositório (botão *Add file → Upload files*).
3. Em *Settings → Pages*, escolha *Deploy from a branch* → `main` / `root`.
4. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io`.
