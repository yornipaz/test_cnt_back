import { Patient } from "../../patient/patient";

export interface PatientRepository{
    save(patient:Patient):Promise<Patient>;
    getAllPatientPending():Promise<Array<Patient>>;
    updateStatePatientById(id:number,state:string):Promise<boolean>; 
    //getPatientById(id:number):Promise<Patient>;
}