# Web Template Builder — DataSoft

Enterprise-grade SaaS where each user builds **one** company profile website. React 19 controls the UI; Laravel powers the API and renders public websites; GrapesJS powers the visual canvas.

## Tech Stack

| Layer      | Technology                                                 |
|------------|------------------------------------------------------------|
| Backend    | Laravel 12+, PHP 8.4, MySQL, Sanctum                       |
| Frontend   | React 19, Vite 8, TailwindCSS 4, React Router, Axios       |
| State      | Zustand (local), TanStack Query (server state)             |
| Forms      | React Hook Form                                            |
| Builder    | GrapesJS + grapesjs-preset-webpage                         |
| Icons      | Lucide React                                               |
| Public Site| Laravel Blade + View Components                            |

## Architecture

See [docs/SETUP.md](./docs/SETUP.md) for domain-driven backend structure, frontend feature/shared layout, Vite aliases, and API conventions.

## Quick Start

```bash
# Backend
composer install
php artisan migrate
php artisan db:seed
php artisan serve

# Frontend
npm install
npm run dev
```
