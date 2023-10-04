import "dotenv/config";

import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import sequelize from "./db/sequelize";
import routes from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

app.use("/api", routes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and tables synced");
  })
  .catch((error) => {
    console.log({ error });
  });
