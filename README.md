# Mental Health Backend

Express + TypeScript + MongoDB API.

## Requirements
- Node.js 18+
- Yarn
- MongoDB instance (local or cloud)

## Environment variables
Copy `.env.example` to `.env` and fill values.

- NODE_DEV: development|production
- PORT: Server port, e.g. 4000
- DATABASE_URL: MongoDB connection string
- BCRYPT_SALT_ROUNDS: e.g. 10
- JWT_SECKRET_TOKEN: JWT secret (note key name matches code)
- JWT_EXPIRE_IN: e.g. 1d
- JWT_REFRESH_TOKEN: refresh secret
- JWT_REFRESH_EXPIRE_IN: e.g. 7d

CORS is currently hard-coded in `src/app.ts` to `http://localhost:3000/`. If you run the Vite frontend (default 5173), update this value or change Vite to run on 3000.

## Setup
```bash
cd mental-health-backend
cp .env.example .env
# edit .env to set real values

# install deps
yarn

# run dev
yarn dev
```
The API will start on `http://localhost:<PORT>` and routes are under `/api/v1`.
