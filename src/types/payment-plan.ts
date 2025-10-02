export interface PaymentPlan {
  id: string;
  name: string;
  description: string;
  periodicalInstallments: number;
  paymentDelay: number;
  createdAt: string;
  lastUpdated: string;
}

export interface PaymentPlanInput {
  name: string;
  description: number;
  periodicalInstallments: number;
  paymentDelay: number;
}

export interface PaymentPlanUpdateInput {
  name: string;
  description: number;
  periodicalInstallments: number;
  paymentDelay: number;
}
