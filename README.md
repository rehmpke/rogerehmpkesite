# rogerehmpke.com

# rogerehmpke.com

[![Deploy Status](https://img.shields.io/badge/Amplify-Automated_Deploys-ff9900)](...)
![Node Version](...)
![Jekyll](...)
![License](...)

This repository powers [rogerehmpke.com](https://www.rogerehmpke.com), a clarity-led portfolio site focused on UX strategy, accessibility, and content systems in higher education and public sector work.

The site is custom built using Jekyll and Webpack, with a streamlined dev workflow and CI/CD to AWS.

---

## 🔧 Requirements

### Jekyll & Bundler (Ruby)

```bash
$ gem install jekyll
$ gem install bundler
```
 - Nodejs/npm - I use NVM (Node Version Manager): https://github.com/creationix/nvm
   - .nvmrc file in this repo will make NVM use Node v22.15.0
 (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: https://nodejs.org/
## Start Dev using and watching with Webpack

`npm run dev`

## Running Jekyll

`bundle exec jekyll serve --livereload`

## Triggering the push to AWS

I am using AWS Ampland to push currently. It is setup to automatically see changes on master
