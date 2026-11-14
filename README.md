# Nool & Zari

**Nool & Zari** is a luxury Indian ethnic wear storefront focused on presenting traditional craftsmanship through a refined, modern shopping experience.

The repository is organized as a monorepo, with the Next.js frontend maintained in `frontend/`. The `backend/` directory is reserved for future backend development.

## Project Structure

```text
Nool&Zari/
├── backend/          # Reserved for future backend development
├── frontend/         # Next.js storefront application
│   ├── public/       # Static assets and images
│   └── src/          # Application source code
├── .gitignore
└── README.md
```

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React, CSS
- **Package Manager:** npm

## Features

The storefront includes:

- Product browsing and product details
- Product categories and collections
- Product quick-view experience
- Shopping cart functionality
- Responsive storefront layout

*Feature availability may evolve as development continues.*

## Prerequisites

Make sure you have the following installed:

- Node.js 18.18 or newer (Node.js 20 LTS recommended)
- npm

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Nool-Zari
```

### 2. Install dependencies

```bash
cd frontend
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Run the following commands from the `frontend/` directory:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

After a successful build, start the production server:

```bash
npm start
```

## Backend Status

The `backend/` directory is currently reserved for future development. No backend service or startup command is configured yet.

## Environment Variables

The current frontend does not require environment variables.

- Do not commit local `.env` files or credentials.
- If environment variables are introduced, document their placeholder values in `.env.example`.
- Keep actual credentials in ignored local environment files.

## Testing

There is currently no automated test script configured in the frontend package.

Linting, TypeScript checks, and production builds can be used to verify the application.

## Development Notes

- Frontend development should be carried out inside `frontend/`.
- Install dependencies from the `frontend/` directory.
- Keep generated files, build outputs, and local environment files out of version control.

---

**Nool & Zari** — Celebrating the art of Indian craftsmanship.