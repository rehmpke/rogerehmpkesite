# rogerehmpke.com

[![Amplify](https://img.shields.io/badge/AWS%20Amplify-Automated%20Deploys-ff9900?style=flat&logo=awsamplify&logoColor=white)]()
![Node Version](https://img.shields.io/badge/Node-22.15.0-339933?style=flat&logo=node.js&logoColor=white)
![Jekyll](https://img.shields.io/badge/Jekyll-Custom%20Build-CC0000?style=flat&logo=jekyll&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat)

This repository powers [rogerehmpke.com](https://www.rogerehmpke.com), a clarity-focused portfolio built around UX strategy, accessibility, digital governance, and systems thinking in higher education and the public sector.

The site is custom-built using **Jekyll** and **Webpack**, with a clean development workflow and CI/CD deployments through **AWS Amplify**.

---

## 🔧 Requirements

### Jekyll & Bundler (Ruby)

```bash
$ gem install jekyll
$ gem install bundler
```

### Nodejs / npm  
I use **NVM (Node Version Manager)**:  
https://github.com/creationix/nvm

- The `.nvmrc` file in this repo locks Node to **v22.15.0**  
  (keeps builds reproducible and avoids dependency breakage)
- Or install Node manually: https://nodejs.org/

---

## 🧰 Tech Stack

- **Jekyll** — HTML templating, content structure, routing  
- **Webpack** — asset bundling, SCSS, PostCSS, optimizations  
- **SCSS** — modular styling  
- **PostCSS + Autoprefixer** — modern CSS pipeline  
- **AWS Amplify** — CI/CD + hosting  
- **NVM** — consistent Node runtime  
- **No themes, no frameworks** — fully hand-rolled for clarity and long-term maintainability  

---

## 🎯 Project Goals

- Keep the architecture lightweight, readable, and future-portable  
- Maintain full control over accessibility and performance  
- Keep content migration trivial (no vendor lock-in)  
- Prioritize semantics, clarity, and sustainability over trends  
- Make the build pipeline predictable and fast  
- Ensure the site remains easy for future-you to maintain

---

## Start Dev using and watching with Webpack

```bash
npm run dev
```

- Watches JS/CSS/SCSS  
- Rebuilds assets automatically  
- Keeps output lightweight and optimized

---

## Running Jekyll

```bash
bundle exec jekyll serve --livereload
```

- Serves the site locally  
- Rebuilds on content/template changes  
- Works concurrently with Webpack

---

## Triggering the push to AWS

The site is deployed via **AWS Amplify**.

Amplify automatically watches the **master** branch and performs:

```
Commit → Push to master → Build → Deploy → Live
```

No manual deployment steps needed.

---

Maintained by **Roger Ehmpke**  
Director of Web Strategy & Digital Experience  
https://www.rogerehmpke.com
