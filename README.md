# testdeploy

A minimal Next.js 16 app configured for Cloudflare Workers with OpenNext.

## Development

```bash
npm install
npm run dev
```

## Cloudflare

Build and preview the Worker locally with:

```bash
npm run preview
```

Deploy with Wrangler using the configured Worker and assets binding:

```bash
npm run deploy
```

Authenticate with Cloudflare first by running `npx wrangler login`.