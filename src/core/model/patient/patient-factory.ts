import { Patient } from "./patient";
export class PatientFactory {
  public static create(
    documentNumber: string,
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    gender: string,
    weight: number,
    height: number,
    smoker: boolean,
    smokerYears: number,
    diet: boolean,
    weightHeight: number,
    state: string,
    priority: number,
    risk: number
  ): Patient {
    return {
      id: NaN,
      documentNumber: documentNumber,
      firstName: firstName,
      lastName: lastName,
      age: age,
      address: address,
      gender: gender,
      weight: weight,
      height: height,
      smoker: smoker,
      smokerYears: smokerYears,
      weightHeight: weightHeight,
      diet: diet,
      state: state,
      priority: priority,
      risk: risk,
    };
  }
}
