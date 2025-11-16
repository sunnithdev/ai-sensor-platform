import express from "express";
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1>Sensor Dashboard</h1><p>Live readings will appear here.</p>");
});

export default app;
