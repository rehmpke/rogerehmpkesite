# rogerehmpke.com

[![Amplify](https://img.shields.io/badge/AWS%20Amplify-Automated%20Deploys-ff9900?style=flat&logo=awsamplify&logoColor=white)]()
![Node Version](https://img.shields.io/badge/Node-22.15.0-339933?style=flat&logo=node.js&logoColor=white)
![Jekyll](https://img.shields.io/badge/Jekyll-Custom%20Build-CC0000?style=flat&logo=jekyll&logoColor=white)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey?style=flat)

This repository powers [rogerehmpke.com](https://www.rogerehmpke.com), a clarity-led digital portfolio centered on UX strategy, accessibility, content governance, and sustainable web operations in higher education and public sector work.

The site is custom-built using Jekyll 4.4.x and a modern Webpack 5 pipeline (Babel, Sass, PostCSS/Autoprefixer, custom hash generation) with automatic CI/CD deployments via AWS Amplify.

---

## 🔧 Requirements

Ruby Version: 3.3.4 (automatically applied via .ruby-version)

### Jekyll & Bundler (Ruby)

```bash
$ gem install jekyll
$ gem install bundler
$ bundle install
```

### Nodejs / npm

I use **NVM (Node Version Manager)**:  
https://github.com/creationix/nvm

- The `.nvmrc` file in this repo locks Node to **v22.15.0**  
  (ensures consistent builds and avoids dependency issues)
- Or install Node manually: https://nodejs.org/

After installing NVM:

```bash
$ nvm use
```

---

## 🧱 Architecture Overview

This project uses a split-pipeline workflow:

### 1. Jekyll handles:

- Page rendering  
- Collections + includes  
- Layout structure  
- Sitemap generation (`jekyll-sitemap`)  
- SEO, schema, and metadata  
- Final HTML output (`_site`)  

### 2. Webpack handles:

- JavaScript bundling  
- Sass → CSS via `sass-embedded`  
- PostCSS + Autoprefixer for browser compatibility  
- Babel transforms using Browserslist targets  
- Custom `MyHashWebpackPlugin` writes `_data/hash.yml` for cache-busting  

**Outputs:**

- `assets/css/style.css`  
- `assets/js/index.js`

### 3. AWS Amplify handles:

- Automated detection of changes to the master branch
- Install + build (Node + Ruby)
- Runs Webpack production build
- Runs Jekyll production build
- Deploys the generated _site directory

This architecture keeps the project lightweight, predictable, and extremely maintainable.

### Why Amplify?

I use AWS Amplify here for simplicity. I manage CloudFront and lower-level AWS services in other projects, but for a single-maintainer portfolio, Amplify handles CI/CD, build, and static hosting in one place. The deployment workflow stays trivial: push to `master` → build → deploy, with no extra infrastructure to babysit.

## 🚀 Development

### Start Webpack (asset bundling)

```bash
$ npm run dev
```

Webpack in **development** mode with:

- File watching
- Source maps for debugging
- SCSS → CSS processing
- Babel transpilation
- Hash injection for template cache busting

---

### Run Jekyll locally

In a second terminal:

```bash
$ bundle exec jekyll serve --livereload
```

This regenerates the site and serves it from _site/ while Webpack handles live asset compilation.

---

### Contact Form

The contact form submits to AWS API Gateway, which invokes the `SendContactEmail` Lambda function. Submissions are handled server-side without a dedicated app server.

Cloudflare Turnstile is integrated into the footer contact form to help reduce automated submissions. The browser requires a Turnstile token before submitting and sends it to the endpoint as `turnstileToken`. The widget resets after each submission attempt.

Frontend integration:

- `_includes/footer.html` — contact form and Turnstile widget
- `_includes/scripts/vendor-cdn.html` — Cloudflare Turnstile script
- `assets/js/src/contact.js` — form validation, token submission, and widget reset

The Lambda handler and Cloudflare widget configuration are managed outside this repository. The handler must validate the token with Cloudflare's Siteverify API before processing a submission; the frontend widget alone does not enforce server-side protection. Keep the Turnstile secret key in the backend configuration, outside the browser and repository.

---

## 📦 Production Build (Amplify)

AWS Amplify performs:

1. Install Ruby + Node dependencies
2. Run Webpack production build
3. Run Jekyll build
4. Deploy _site as the live website

Push to `master`→ automatic deployment.

No manual S3 uploads are required.

---

## 🧰 Tech Stack

- **Jekyll 4.4.x** — static site generation
- **Webpack 5** — bundling and asset pipeline
- **Babel** — ESNext → browser-ready JS
- **Sass (sass-embedded)** — modern SCSS compiler
- **PostCSS + Autoprefixer** — CSS transformations
- **Custom Webpack Hash Plugin** — cache busting
- **AWS Amplify** — CI/CD + hosting
- **AWS Lambda** — serverless handler for contact form submissions
- **AWS API Gateway** — contact form API endpoint
- **Cloudflare Turnstile** — contact form bot protection widget

---

## 📁 Key Directories

A focused view of the directories involved in the Jekyll + Webpack pipeline.

``` text
rogerehmpkesite/
├── assets/              # Source JS/SCSS + built output from Webpack
├── _data/               # Contains hash.yml injected by Webpack for cache-busting
├── buildtools/          # Custom MyHashWebpackPlugin
├── _sass/               # SCSS partials (Webpack compiles these)
├── _includes/           # Jekyll partials
├── _layouts/            # Jekyll layouts
├── _site/               # Built site output (ignored)
│
├── package.json         # Webpack/Babel/PostCSS config
├── webpack.config.js    # Webpack pipeline config
├── postcss.config.js    # Autoprefixer setup
├── Gemfile              # Ruby & Jekyll dependencies
├── .nvmrc               # Node 22.15.0
└── .ruby-version        # Ruby 3.3.4
```

---

## 🔒 License

© 2025 Roger Ehmpke. All rights reserved.

This repository is publicly visible for transparency but not licensed for reuse.
See the `LICENSE` file for full details.
