# Design refinement review

Branch: `design/editorial-refinement`. This is a review branch; it is not merged into `master`.

The branch preserves the original graphic identity: compass textures, portrait framing, project artwork, two-column project cards, warm accents, icons, and the process route. Refinements are selective: plainer headings and tone, quieter supporting labels, and less boxing around ordinary case-study prose. Metric highlights, project snapshots, and decision comparisons retain distinct panel treatments. The four case studies retain their full text, metrics, links, and collaboration credit. No new dependencies are required.

From your existing local checkout, with local changes saved first:

```sh
git fetch origin
git switch --track origin/design/editorial-refinement
npm run build
JEKYLL_ENV=production bundle exec jekyll serve
```

If the branch already exists locally, use `git switch design/editorial-refinement` instead. Open the local address printed by Jekyll, normally `http://127.0.0.1:4000`.

Review the homepage, case-study index, and all four case studies at desktop and narrow widths. Check project rows, portrait placement, headings, comparison columns, and navigation. Contact and AI services remain connected to their existing endpoints; avoid sending test messages just to inspect layout. Turnstile may reject a local hostname, as it did in previous local testing.

Validation completed: production Webpack and Jekyll builds, content/link preservation for the four case studies, and whitespace checks. Browser visual verification is pending: the review browser could not open this workspace's local server.

To return to the current site, switch to `master` and rebuild the assets.
