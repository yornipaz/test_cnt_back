import { PatientRepository } from "../../../../core/model/getway/patient-repository/patient-repository";
import { Patient } from "../../../../core/model/patient/patient";

import { PatientData } from "./tbl_patient";


export class PatientRepositoryAdapter implements PatientRepository{
    save(patient: Patient): Promise<Patient> {
        return this.doQueryMono(PatientData.create(patient));
    }
    getAllPatientPending(): Promise<Patient[]> {
        return this.doQueryMany(PatientData.findAll())
    }
    updateStatePatientById(idPatient: number, statePatient: string): Promise<boolean> {
       
        
        return new Promise<boolean>((resolve,reject)=>{
            PatientData.update({state:statePatient},{where:{id:idPatient},returning:true}).then(
                (result)=>{
                    console.log(result)
                    resolve(true)

                }
            ).catch((err)=>{console.error(err)
            reject(false)
            }
            )

        })
    }


    private doQueryMany(result: Promise<Array<PatientData>>): Promise<Array<Patient>> {
        return new Promise<Array<Patient>>((resolve, reject) => {
            result.then(data => {
                const d: Array<Patient> = [];
                data.forEach(a => d.push(this.toModel(a)))
                resolve(d);
            })
                .catch(err => reject(err));
        });

    }

    private doQueryMono(result: Promise<PatientData>): Promise<Patient> {
        return new Promise<Patient>((resolve, reject) => {
            result.then(data => {
                resolve(this.toModel(data));
            })
                .catch(err => reject(err));
        });
    }

   private  toModel(entity: PatientData): Patient {
        return{
            id:entity.id,
            documentNumber: entity.documentNumber,
            firstName: entity.firstName,
            lastName: entity.lastName,
            age: entity.age,
            address: entity.address,
            gender: entity.gender,
            weight: entity.weight,
            height: entity.height,
            smoker: entity.smoker,
            smokerYears:entity.smokerYears,
            weightHeight: entity.weightHeight,
            diet: entity.diet,
            state: entity.state,
            priority: entity.priority,
            risk: entity.risk,

        }
    }

}