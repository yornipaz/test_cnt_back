import express from "express";
import { RequestPatient } from "../../../../core/model/patient/request-patient";
import { EmergencyServiceUseCase } from "../../../../core/use-case/emergency-service-usecase";

export class PatientController {
  private emergencyServiceUseCase: EmergencyServiceUseCase;
  constructor() {
    this.emergencyServiceUseCase = new EmergencyServiceUseCase();
  }

  create(req: express.Request, res: express.Response) {
      const patient:RequestPatient= req.body;
      console.log(patient)
      this.emergencyServiceUseCase.savePatient(patient).then(result => res.status(200).json(result)).catch(err =>{
          console.error('error ' , err);
          res.status(500).json({msg:'Error to save Patient',date: new Date()});
      })
  }
  updateState(req: express.Request, res: express.Response) {
      const idP=req.headers.id;
      const state=req.headers.state;
      const idB:number =req.body.id;
      const stateB:string=req.body.state;
     
      //const id:number= parseInt(idP)
      console.log(req.headers.id?req.headers.id:'')
      this.emergencyServiceUseCase.updateStatePatient(idB,stateB).then(result => res.status(200).json(result)).catch(err =>{
        console.error('error ' , err);
        res.status(500).json({msg:'Error to update Patient',date: new Date()});
    })
      

      

  }
  getAllPending(req: express.Request, res: express.Response) {
      this.emergencyServiceUseCase.getAllPatient().then(result => res.status(200).json(result)).catch(err =>{
        console.error('error ' , err);
        res.status(500).json({msg:'Error to get Patient',date: new Date()});
    })

  }
}
