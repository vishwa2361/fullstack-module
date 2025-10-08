# Backend (Node.js + Express)

1. Copy `.env.example` to `.env` and fill values.
2. Run `npm install`.
3. Start server: `npm run dev` (requires nodemon) or `npm start`.
4. API endpoints:
   - POST /api/auth/register
   - POST /api/auth/login
   - GET /api/auth/profile (requires Authorization: Bearer <token>)
