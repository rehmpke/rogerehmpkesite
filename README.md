# rogerehmpke.com

This repository powers [Roger Ehmpke’s personal portfolio](https://www.rogerehmpke.com): higher-ed web strategy, accessibility governance, CMS architecture, analytics, and search and AI discoverability.

Jekyll renders the site. Webpack builds the JavaScript and CSS. AWS Amplify builds and deploys changes merged into `master`.

## Local setup

Use Ruby **3.3.4** and Node **22.15.0**, as recorded in `.ruby-version` and `.nvmrc`. These files guide compatible version managers; they do not install or switch runtimes by themselves. With NVM installed, run `nvm install` and `nvm use` from the repository directory.

Install dependencies:

```bash
gem install bundler
bundle install
npm install
```

Jekyll is installed through the Gemfile; a separate global Jekyll installation is unnecessary. This repository currently ignores `Gemfile.lock` and `package-lock.json`, so dependency resolution can differ between fresh installs.

## Development

Start the asset watcher:

```bash
npm run dev
```

In a second terminal, serve the site:

```bash
bundle exec jekyll serve --livereload
```

Open the local URL printed by Jekyll. Restart Jekyll after changing `_config.yml`.

Webpack watches JavaScript and Sass sources, generates development source maps, and updates the asset hash used by Jekyll. Local contact and assistant requests still use the configured AWS endpoints; they are not mock services. Turnstile testing also depends on the widget’s configured hostnames.

## Production build and deployment

Run Webpack before Jekyll so the generated HTML uses the latest assets and cache-busting hash:

```bash
npm run build
JEKYLL_ENV=production bundle exec jekyll build --trace
```

The finished site is in `_site/`. Amplify should run the same commands after installing Node and Ruby dependencies, then publish `_site` as its artifact directory. The active Amplify build specification is managed in AWS; there is no `amplify.yml` in this repository.

Merging into `master` triggers deployment. Check Amplify’s deployment status before verifying the live page; a successful build alone does not confirm that the new version is serving. For CSS or JavaScript changes, compare the asset query-string hash in the live page source with `_data/hash.yml`. For content changes, look for the edited text in the live page source.

## Architecture and editing map

| Location | Purpose |
| --- | --- |
| `index.html` | Homepage content and layout |
| `case-studies/` | Case study index and individual stories |
| `_includes/`, `_layouts/` | Shared Jekyll markup |
| `assets/scss/` | Sass sources, including page and component styles |
| `assets/js/src/` | JavaScript sources bundled by Webpack |
| `assets/css/style.css`, `assets/js/index.js` | Generated production assets |
| `buildtools/myHashWebpackPlugin.js`, `_data/hash.yml` | Webpack hash generation and Jekyll cache busting |
| `_includes/head.html` | Titles, canonical links, descriptions, and sharing metadata |
| `_includes/schema/jsonld.html` | Shared structured data |
| `assets/img/og-card.svg`, `assets/img/og-card.png` | Editable sharing-card source and published image |
| `assets/files/roger-ehmpke-resume.pdf` | Downloadable résumé |
| `privacy.html`, `accessibility-in-practice.html` | Public privacy and accessibility statements |
| `_config.yml` | Site configuration and sitemap plugin |

Edit JavaScript and Sass sources rather than their generated output. After an asset change, rebuild and commit the generated CSS/JavaScript and `_data/hash.yml` together. HTML and content changes generally need only the Jekyll build.

Page frontmatter uses `description` for concise search and sharing summaries, `schema_description` for detailed structured data, and `ai_context` for page-specific assistant context. Keep these aligned with the visible content and supported evidence. The `jekyll-sitemap` plugin generates the sitemap during the build.

## Contact form

The footer form sends requests to AWS API Gateway and the externally managed `SendContactEmail` Lambda function.

- `_includes/footer.html` contains the form and Cloudflare Turnstile widget.
- `assets/js/src/contact.js` validates the form, sends `turnstileToken`, and resets the widget after each submission attempt.
- `_includes/scripts/vendor-cdn.html` loads the Turnstile script.

The Lambda handler and Cloudflare configuration are outside this repository. The handler must verify the token with Cloudflare’s Siteverify API before processing a submission. Keep the secret key in backend configuration. The browser stops waiting after 30 seconds and preserves the draft on failure; a timeout does not establish whether the backend delivered the message.

## Portfolio assistant

The assistant’s interface and request handling live in `_includes/scripts/vendor-cdn.html`. It sends the question, page `ai_context`, shared portfolio context, and recent conversation history to an externally managed AWS API Gateway/Lambda endpoint. Browser conversation history uses session storage.

Update the shared context and exact terminology when Roger’s role or portfolio evidence changes. The assistant should ground answers in that context and avoid inventing outcomes or responsibilities. Requests stop waiting after 60 seconds and allow the visitor to retry.

The assistant does not currently submit a Turnstile token. The contact form’s Turnstile integration does not protect the assistant endpoint. Backend model settings, access controls, and request handling are managed in AWS.

## License

© 2025 Roger Ehmpke. All rights reserved.

This repository is publicly visible for professional transparency and is not licensed for reuse. See [LICENSE](LICENSE). Third-party dependencies retain their own licenses.
