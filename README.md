# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Static wildcard subdomains

Tenant records live in `public/subdomains.json`. Public wildcard subdomains fetch that static file and either render a hosted page or redirect visitors.

Configure these domains in Vercel:

- `yahyaqr.xyz`
- `*.yahyaqr.xyz`

Set these environment variables in Vercel:

- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_OWNER`
- `GITHUB_REPO`
- `GITHUB_BRANCH`
- `VITE_ROOT_DOMAIN`

The dashboard at `/dashboard` edits the static config and saves by committing `public/subdomains.json` back to GitHub. Vercel should be connected to the same GitHub branch so each save triggers a new deployment.
