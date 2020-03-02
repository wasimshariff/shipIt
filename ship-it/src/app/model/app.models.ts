
export class ApplicantInfo {
  dateOfBirth: string;
  gender: string;
  height: string;
  weight: string;
  firstName: string;
  lastName: string;
  tobaccoUsage: TobaccoUsage;
  bpReading: BpIndicators;
  finance: FinanceIndicators;
  address: Address;
}

export class TobaccoUsage {
  tobaccoIndicator: boolean;
  usageDuration: number;
}

export class BpIndicators {
  hdl: number;
  ldl: number;
  ratio: number;
}

export class FinanceIndicators {
  annualIncome: number;
}

export interface SelectOption {
  value: string;
  viewValue: string;
}

export class Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}
