# Nool & Zari

Nool & Zari is a storefront application. The Next.js frontend and its dependencies are maintained in `frontend/`. The `backend/` directory is currently empty; no backend service or startup command is available yet.

## Requirements

- Node.js 18.18 or newer (Node.js 20 LTS is recommended)
- npm

## Install and run the frontend

```sh
cd frontend
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify a production build

Run these commands from `frontend/`:

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

There is no automated test script configured yet.

## Environment variables

The current frontend does not require environment variables. Do not commit local `.env` files or credentials. If environment variables are introduced, document placeholder values in `.env.example` and keep real values in an ignored local environment file.
