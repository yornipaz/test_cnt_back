import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import * as http from "http";
import * as expressWinston from "express-winston";
import cors from "cors";
import debug from "debug";
import morgan from 'morgan';

import { LoggerOptions } from "./config/logger";
import {AbstractRoutesConfig} from '../infrastructure/helpers/abstract-entry-points/abstract-routes-config'
import {RoutesConfig } from '../infrastructure/entry-points/rest/config/routes-config'
import { sequelize } from "../infrastructure/driven-adapters/mysql-repository/mysql-config";



const app: express.Application = express();
const server: http.Server = http.createServer(app);
dotenv.config();
const runningMessage = `Server running at http://localhost:${process.env.PORT}`;
let routes: Array<AbstractRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");


app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended:true}));
app.use(morgan('dev'));
app.use(expressWinston.logger(LoggerOptions.getLoggerOptions()));

routes = RoutesConfig.getRoutes(app);

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
  });
sequelize.sync();
server.listen(process.env.PORT, () => {
    routes.forEach((route: AbstractRoutesConfig) => {
      debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
  });