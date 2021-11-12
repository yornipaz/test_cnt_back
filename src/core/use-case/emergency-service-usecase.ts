import { PatientRepositoryAdapter } from "../../infrastructure/driven-adapters/mysql-repository/patient/patient-repository-adapter";
import { PatientRepository } from "../model/getway/patient-repository/patient-repository";
import { Patient } from "../model/patient/patient";
import { PatientFactory } from "../model/patient/patient-factory";
import { PatientOperations } from "../model/patient/patient-operations";
import { RequestPatient } from "../model/patient/request-patient";

export class EmergencyServiceUseCase {
  private patientRepository: PatientRepository = new PatientRepositoryAdapter();
  private patientOperations: PatientOperations = new PatientOperations();

  savePatient(requestPatient: RequestPatient): Promise<Patient> {
    let {
      gender,
      age,
      weightHeight,
      height,
      weight,
      diet,
      smoker,
      smokerYears,
      documentNumber,
      firstName,
      lastName,
      address,
    } = requestPatient;
    let ratio: number = weightHeight
      ? weightHeight
      : this.patientOperations.CalculateWeightHeightRatio(weight, height);
    let priority: number = this.patientOperations.CalculatePriority(
      age,
      ratio,
      diet,
      smoker,
      smokerYears!
    );
    let risk: number = this.patientOperations.CalculateRisk(age, priority);
    let patientFactory: Patient = PatientFactory.create(
      documentNumber,
      firstName,
      lastName,
      age,
      address!,
      gender!,
      weight,
      height,
      smoker,
      smokerYears!,
      diet,
      ratio,
      "Pendiente",
      priority,
      risk
    );

    return this.patientRepository.save(patientFactory);
  }

  getAllPatient():Promise<Array<Patient>>{
      return this.patientRepository.getAllPatientPending()
  }
  updateStatePatient(idPatient: number, statePatient: string):Promise<boolean>{
      return this.patientRepository.updateStatePatientById(idPatient,statePatient);
  }
}
