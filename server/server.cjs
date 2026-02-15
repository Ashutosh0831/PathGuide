const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'dev-secret-key-change-this';
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeJsonSync(DB_FILE, { users: [], strategies: [] });
}

// Database Helper
const getDB = () => fs.readJsonSync(DB_FILE);
const saveDB = (data) => fs.writeJsonSync(DB_FILE, data);

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// --- AUTH ROUTES ---

// Register
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  const db = getDB();
  
  if (db.users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), username, password: hashedPassword };
  
  db.users.push(newUser);
  saveDB(db);

  const token = jwt.sign({ username: newUser.username }, SECRET_KEY);
  res.json({ token, username });
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const db = getDB();
  const user = db.users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY);
  res.json({ token, username });
});

// --- STRATEGY ROUTES (Import Logic from careerLogic.js later) ---
// For now, I'll allow the client to request strategy generation.
// Ideally, the heavy logic runs here.
// I will import the logic from a separate file to keep this clean.
const { generateStrategy } = require('./careerLogic.cjs');

app.post('/api/strategy', authenticateToken, async (req, res) => {
  try {
    const profile = req.body;
    // Simulate async processing
    const strategy = await generateStrategy(profile);
    
    // Save to DB (Optional History Feature)
    const db = getDB();
    db.strategies.push({ user: req.user.username, strategy, date: new Date() });
    saveDB(db);

    res.json(strategy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production' || true) { // Defaulting to serve if available
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
  if (req.url.startsWith('/api')) {
    return res.status(404).json({ message: 'API Route Not Found' });
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
