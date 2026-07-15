# Portfolio Website

Este repositório contém o site de portfólio de Lari Toschi, construído como um site estático em HTML, CSS e JavaScript.

## Visão geral

O projeto oferece:

- Página inicial com destaques de cases e seção de carrossel
- Navegação entre páginas de portfólio, sobre e contato
- Suporte a idiomas português e inglês com troca dinâmica de conteúdo
- Carrossel de imagens com bolinhas de indicador, setas de navegação e legendas individuais por imagem
- Layout responsivo e visual clean
- Script de processamento de imagens para gerar versões responsivas usando `sharp`

## Estrutura do projeto

- `index.html` — página inicial do site
- `about.html` — página sobre o perfil
- `case-studies.html` — página com lista de estudos de caso
- `contact.html` — página de contato
- `lang.js` — lógica de internacionalização e carrossel
- `styles.css` — estilo global do site
- `assets/` — imagens e outros ativos estáticos
- `scripts/resize-images.js` — script para gerar imagens otimizadas
- `package.json` — dependências e script de utilitário

## Como usar

### Visualizar localmente

Como este é um site estático, basta abrir os arquivos HTML direto no navegador ou servir o diretório com um servidor local.

Exemplo com `npx serve`:

```bash
cd portfolio
npx serve .
```

### Instalar dependências para o processamento de imagens

O projeto inclui um script de utilitário que utiliza `sharp` para redimensionar e gerar imagens responsivas.

```bash
cd portfolio
npm install
npm run resize-images
```

## Tradução e internacionalização

A troca de idioma funciona através de `lang.js` usando `localStorage` para lembrar o idioma selecionado entre visitas.

As chaves de tradução ficam definidas em `lang.js` e são aplicadas em elementos marcados com `data-i18n-key`.

## Boas práticas para o GitHub

- Use `main` ou `master` como branch principal
- Mantenha o histórico de commits limpo e descritivo
- Exclua arquivos temporários e dependências com `.gitignore`
- Atualize o `README.md` com qualquer alteração no fluxo do projeto

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
