# Company Profile Website Builder — Setup & Architecture

Enterprise-grade SaaS where each user builds **one** company profile website. React 19 controls the UI; Laravel powers the API and renders public websites; GrapesJS powers the visual canvas.

---

## 1. Tech Stack

| Layer      | Technology                                                 |
|------------|------------------------------------------------------------|
| Backend    | Laravel 12+, PHP 8.4, MySQL, Sanctum                       |
| Frontend   | React 19, Vite 8, TailwindCSS 4, React Router, Axios       |
| State      | Zustand (local), TanStack Query (server state)             |
| Forms      | React Hook Form                                            |
| Builder    | GrapesJS + grapesjs-preset-webpage                         |
| Icons      | Lucide React                                               |
| Public Site| Laravel Blade + View Components                            |

---

## 2. Domain-Driven Folder Structure

```
app/
├── Domains/
│   ├── Auth/
│   │   ├── Http/Controllers/AuthController.php
│   │   ├── Services/AuthService.php
│   │   ├── Repositories/AuthRepository.php
│   │   ├── Requests/LoginRequest.php, RegisterRequest.php, ChangePasswordRequest.php
│   │   └── DTO/LoginDTO.php, RegisterDTO.php, ChangePasswordDTO.php
│   ├── User/
│   │   ├── Models/User.php
│   │   ├── Repositories/UserRepository.php
│   │   └── Resources/UserResource.php
│   ├── Website/            ← builder content + settings (later features)
│   ├── Template/           ← 10 template categories (later features)
│   ├── Builder/            ← GrapesJS data mapping (later features)
│   ├── Media/              ← uploads (jpg/jpeg/png/webp ≤ 5MB)
│   ├── Publish/            ← published_json rendering
│   ├── Admin/              ← admin user mgmt + dashboard
│   └── Shared/
│       ├── Helpers/ApiResponse.php
│       ├── Contracts/RepositoryContract.php, ServiceContract.php
│       ├── Repositories/BaseRepository.php
│       ├── Services/BaseService.php
│       ├── Http/Controllers/BaseController.php
│       ├── Http/Middleware/EnsureUserIsAdmin.php
│       ├── Exceptions/DomainException.php, EntityNotFoundException.php
│       ├── DTO/BaseDTO.php
│       └── Enums/UserRole.php
├── Models/                 ← removed (moved into Domains)
├── Http/                   ← kept only Laravel stub Controller.php
└── Providers/
```

**Frontend** lives under `resources/js/` (api, pages, layouts, hooks, services, store, router, components, constants, utils, assets).

---

## 3. Architectural Principles

```
Controller (HTTP only)
   │  FormRequest → DTO
   ▼
Service (business logic ONLY)
   │  Repository calls
   ▼
Repository (Eloquent ONLY)
   │
   ▼
Model
```

- **Controllers** receive requests and return `ApiResponse`. No business logic.
- **Services** hold all business rules.
- **Repositories** own every Eloquent/database query.
- **Form Requests** own validation.
- **DTOs** carry validated data between layers.
- **API Resources** control output shaping.
- **Enums** (e.g., `UserRole::Admin|User`) prevent magic strings.

---

## 4. Feature 01 — User Authentication

### Database `users` table

```
id, name, email (unique), email_verified_at (nullable),
password, avatar (nullable), role enum('admin','user') default 'user',
remember_token, timestamps
```

### API Endpoints

| Method | URI                              | Auth       | Description            |
|--------|----------------------------------|------------|------------------------|
| POST   | /api/v1/auth/register            | –          | Create user + token    |
| POST   | /api/v1/auth/login               | –          | Issue token            |
| POST   | /api/v1/auth/logout              | sanctum    | Revoke current token   |
| GET    | /api/v1/auth/me                  | sanctum    | Current user resource  |
| PUT    | /api/v1/auth/change-password     | sanctum    | Change password        |

### Login Flow

1. `LoginRequest` validates `email` + `password`.
2. `AuthController` maps validated data → `LoginDTO`.
3. `AuthService::login()` checks email + password via `Hash::check`.
4. Issues a Sanctum `auth-token`.
5. Returns `ApiResponse::success([ user, token ])`.

### Register Flow

1. `RegisterRequest` validates `name`, `email` (unique), `password` (min:8, confirmed).
2. `AuthService::register()` hashes via the model's `hashed` cast.
3. Default role = `UserRole::User`.
4. Issues token inside a DB transaction.
5. Returns `ApiResponse::created([ user, token ])`.

### Change Password

- `ChangePasswordRequest` requires `current_password` + `new_password` (min:8, confirmed).
- `AuthService` verifies the current password via `Hash::check`.
- Re-hashes new password (model `hashed` cast).

### UserResource Shape

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "avatar": null,
  "role": "user",
  "created_at": "2026-08-03T10:00:00Z"
}
```

---

## 5. Commands

```bash
# Backend
composer install
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
cp .env.example .env
php artisan key:generate
php artisan storage:link
php artisan migrate            # users (avatar, role enum) + tokens
php artisan db:seed            # test@example.com (user) + admin@example.com (admin)
php artisan serve              # API :8000

# Frontend
npm install
npm run dev                    # SPA :5173 (HMR)
npm run build                  # production assets
```

---

## 6. Configuration (`config/`)

- **`config/builder.php`** — website sections + components.
- **`config/features.php`** — feature flags, media policy, 10 template categories, website statuses.
- **`config/auth.php`** — points to `App\Domains\User\Models\User` + `token_name`.
- **`config/cors.php`** — allows `api/*` + `sanctum/csrf-cookie`, credentials.
- **`config/sanctum.php`** — stateful domains incl. Vite dev server.

---

## 7. Error Handling

Every endpoint returns the canonical payload:

```json
// Success
{ "success": true, "message": "...", "data": { ... } }

// Error
{ "success": false, "message": "...", "errors": { "field": ["..."] } }
```

- **401** — invalid credentials / unauthenticated (DomainException).
- **403** — admin-only route via `EnsureUserIsAdmin`.
- **404** — `EntityNotFoundException`.
- **422** — validation errors from Form Requests.
- **500** — generic server error.

`bootstrap/app.php` registers a global renderer converting `DomainException` to `ApiResponse::error`.

---

## 8. Best Practices

1. Never put Eloquent queries or business logic in controllers.
2. Always return `ApiResponse` from API endpoints.
3. Use DTOs to pass validated data across the domain boundary.
4. Gate admin routes behind the `admin` middleware.
5. Use the `websites` disk + `features.php` media policy for uploads.
6. Use `UserRole` enum everywhere roles are compared.
7. Keep GrapesJS content versioned via `draft_json` → `published_json`.
8. Commit only `.env.example`.
9. Two-command dev loop: `php artisan serve` + `npm run dev`.
