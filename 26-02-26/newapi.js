const express = require("express");
const app = express();
const PORT = 3080;

app.use(express.json());

let users = [{ id: 1, name: "John Doe", email: "john@example.com" }];

// Middleware 1: Add timestamp
app.use((req, res, next) => {
  req.timestamp = new Date().toISOString();
  next();
});

// Middleware 2: Log requests
app.use((req, res, next) => {
  console.log(`[${req.timestamp}] ${req.method} ${req.path}`);
  next();
});

// Middleware 3: CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
("/");
// Simple routes
app.get("/api/users", (req, res) => res.json(users));
app.post("/api/users", (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
