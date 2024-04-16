import express, { json } from "express";
import cors from "cors";
import compression from "compression";

import routes from "src/app/routes/routes";

import "./database/index";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(compression());
    this.server.use(json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
