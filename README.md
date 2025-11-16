# rogerehmpke.com

[![Amplify](https://img.shields.io/badge/AWS%20Amplify-Automated%20Deploys-ff9900?style=flat&logo=awsamplify&logoColor=white)]()
![Node Version](https://img.shields.io/badge/Node-22.15.0-339933?style=flat&logo=node.js&logoColor=white)
![Jekyll](https://img.shields.io/badge/Jekyll-Custom%20Build-CC0000?style=flat&logo=jekyll&logoColor=white)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey?style=flat)

This repository powers [rogerehmpke.com](https://www.rogerehmpke.com), a clarity-led portfolio site focused on UX strategy, accessibility, and content systems in higher education and public sector work.

The site is custom built using **Jekyll** and a modern **Webpack 5** pipeline (Babel, Sass, PostCSS/Autoprefixer, custom hash data), with a streamlined dev workflow and CI/CD on **AWS**.

---

## 🔧 Requirements

Ruby Version: 3.3.4 (automatically applied via .ruby-version)

### Jekyll & Bundler (Ruby)

```bash
$ gem install jekyll
$ gem install bundler
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

## Start Dev using and watching with Webpack

```bash
$ npm run dev
```

This runs Webpack in **development** mode with:

- `watch` enabled (rebuilds on change)
- source maps for easier debugging
- Babel transpilation targeting your `browserslist`
- SCSS → CSS via `sass-embedded`, `postcss-loader`, and `autoprefixer`
- CSS extracted to `assets/css/style.css`
- JS bundled to `assets/js/index.js`
- A custom `MyHashWebpackPlugin` writing a hash file to `_data/hash.yml` for cache-busting inside Jekyll templates

Use this while you’re also running Jekyll locally.

---

## Running Jekyll

In a separate terminal:

```bash
$ bundle exec jekyll serve --livereload
```

- Serves the site from the generated `_site` directory  
- Rebuilds on content/layout changes  
- Works alongside `npm run dev` (Webpack) so assets and pages stay in sync

---

## Triggering the push to AWS

The site is deployed via **AWS** infrastructure (e.g., Amplify or static hosting) wired to this repository.

Typical flow:

1. Work locally with:

   ```bash
   $ npm run dev
   $ bundle exec jekyll serve --livereload
   ```

2. When ready, commit and push changes to the main branch (e.g., `master`).

Your AWS setup is configured to:

- Detect changes pushed to the repo  
- Run the appropriate build commands (Webpack + Jekyll build)  
- Publish the contents of the Jekyll `_site` output as the live site

Conceptually:

```text
Local changes
  → git commit
  → git push origin master
  → AWS build (Webpack + Jekyll)
  → Deploy updated _site to production
```

No manual S3 copy is required in the day-to-day workflow once AWS is wired up.

