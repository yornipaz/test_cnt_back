export class PatientOperations {
  CalculatePriority(
    age: number,
    weightHeight: number,
    diet: boolean,
    smoker: boolean,
    smokerYears: number
  ): number {
    let priority!: number;
    if (age >= 1 && age <= 15) {
      priority = this.ChildPriority(age, weightHeight);
    }
    if (age >= 16 && age <= 40) {
      priority = this.YoungPriority(smoker, smokerYears);
    }
    if (age >= 41) {
      priority = this.AdultsPriority(diet, age);
    }

    return priority;
  }

  private ChildPriority(age: number, weightHeight: number): number {
    let cp: number = 0;
    if (age >= 1 && age <= 5) {
      cp = weightHeight + 3;
    }
    if (age >= 6 && age <= 12) {
      cp = weightHeight + 3;
    }
    if (age >= 13 && age <= 15) {
      cp = weightHeight + 3;
    }
    return cp;
  }
  private YoungPriority(smoker: boolean, smokerYears: number): number {
    return smoker?smokerYears/(4+2):2;
  }
  private AdultsPriority(diet: boolean, age: number): number {

    return (diet && age >= 60 && age <= 100)? age / (20 + 4):age / (30 + 3);
  }
  CalculateRisk(age: number, priority: number) {
    let risk!: number;
    if (age >= 1 && age <= 40) {
      risk = (age * priority) / 100;
    }
    if (age >= 41) {
      risk = (age * priority) / (100 + 5.3);
    }
    return risk;
  }
  CalculateWeightHeightRatio(weight: number, height: number): number {
    let h = height / 100;
    let ratio = weight / (h * h);
    return ratio;
  }
}
