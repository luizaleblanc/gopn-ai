import express from "express";
import cors from "cors";
import compression from "compression";

import routes from "../app/routes/routes";
import "../database/index";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(compression());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
