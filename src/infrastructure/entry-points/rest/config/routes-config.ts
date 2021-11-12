import express from "express";
import { AbstractRoutesConfig } from "../../../helpers/abstract-entry-points/abstract-routes-config";
import{PatientRoute} from '../patient/patient'


export class RoutesConfig {

  static routes: Array<AbstractRoutesConfig> = [];

  static getRoutes(app: express.Application): Array<AbstractRoutesConfig> {
    this.routes.push(new PatientRoute(app))

    return this.routes;
  }
}