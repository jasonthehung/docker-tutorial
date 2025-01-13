import express from "express";
import https from "https";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import { setRoutes } from "./routes/index";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Middleware
app.use(json());

// Routes
setRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// HTTPS options
const options = {
  key: fs.readFileSync("./private-key.pem"),
  cert: fs.readFileSync("./certificate.pem"),
};

// Test database connection
async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Create HTTPS server
https.createServer(options, app).listen(PORT, async () => {
  console.log(`Server is running on https://localhost:${PORT}`);
  await testDatabaseConnection();
});
