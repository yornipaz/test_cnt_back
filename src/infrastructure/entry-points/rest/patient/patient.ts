import express from "express";
import { AbstractRoutesConfig } from "../../../helpers/abstract-entry-points/abstract-routes-config";
import { PatientController } from "./patient-controller";

export class PatientRoute extends AbstractRoutesConfig {
  constructor(app: express.Application) {
    super(app, "Patient");
  }
  configureRoutes(): express.Application {
    const patientController: PatientController = new PatientController();

    this.app
      .route("/api/v1/patient")
      .get((req: express.Request, res: express.Response) =>
        patientController.getAllPending(req, res)
      )
      .put((req: express.Request, res: express.Response) =>
        patientController.updateState(req, res)
      )
      .post((req: express.Request, res: express.Response) =>
        patientController.create(req, res)
      );

    return this.app;
  }
}
