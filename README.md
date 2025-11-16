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

### **1. Jekyll handles:**
- Page rendering  
- Collections + includes  
- Layout structure  
- Sitemap generation (`jekyll-sitemap`)  
- SEO, schema, and metadata  
- Final HTML output (`_site`)  

### **2. Webpack handles:**
- JavaScript bundling  
- Sass → CSS via `sass-embedded`  
- PostCSS + Autoprefixer for browser compatibility  
- Babel transforms using Browserslist targets  
- Custom `MyHashWebpackPlugin` writes `_data/hash.yml` for cache-busting  

**Outputs:**
- `assets/css/style.css`  
- `assets/js/index.js`

### **3. AWS Amplify handles:

- Automated detection of changes to the master branch
- Install + build (Node + Ruby)
- Runs Webpack production build
- Runs Jekyll production build
- Deploys the generated _site directory

This architecture keeps the project lightweight, predictable, and extremely maintainable.

## 🚀 Development

### **Start Webpack (asset bundling)
```bash
$ npm run dev
```

Webpack in **development** mode with:

- File watching
- source maps for debugging
- SCSS → CSS processing
- Babel transpilation
- Hash injection for template cache busting

---

## Run Jekyll locally

In a second terminal:

```bash
$ bundle exec jekyll serve --livereload
```

This regenerates the site and serves it from _site/ while Webpack handles live asset compilation.

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

- Jekyll 4.4.x — static site generation
- Webpack 5 — bundling and asset pipeline
- Babel — ESNext → browser-ready JS
- Sass (sass-embedded) — modern SCSS compiler
- PostCSS + Autoprefixer — CSS transformations
- Custom Webpack Hash Plugin — cache busting
- AWS Amplify — CI/CD + hosting

---

📁 File Structure (Simplified)

assets/
  css/
  js/
  img/
_includes/
_layouts/
_sass/
_data/
_site/        # built output (ignored)
Gemfile
webpack.config.js
package.json
postcss.config.js
README.md
LICENSE
