# FuturePath AI - Career Strategy Simulator

FuturePath is a premium AI-driven career strategy platform that helps professionals simulate their career trajectories, identify skill gaps, and execute 28-day action plans.

## 🚀 Quick Start (Local Development)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the App**:
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` and the backend on `http://localhost:5000`.

## 🛠 Deployment to GitHub / Production

This project is configured for easy deployment to platforms like **Render**, **Heroku**, or **DigitalOcean**.

### 1. Build the Frontend
Vite needs to compile the React code into static assets.
```bash
npm run build
```

### 2. Environment Variables
On your deployment platform, set the following variables:
- `NODE_ENV`: `production`
- `SECRET_KEY`: A long, random string for JWT security.
- `PORT`: (Managed automatically by most hosts, or set to `5000`).

### 3. Production Command
The platform should run:
```bash
npm start
```
This starts the Express server, which serves both the API and the pre-built frontend files from the `dist` folder.

## 📁 Project Structure
- `src/`: React frontend source.
- `server/`: Node.js Express backend logic.
- `server/db.json`: Local JSON database (Initialized automatically, ignored by Git).
- `dist/`: Build output (Ignored by Git).

---
Built with ❤️ by FuturePath Team.
