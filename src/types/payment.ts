export interface Payment {
  id: string;
  clientId: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  method: "card" | "bank_transfer" | "paypal" | string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentInput {
  clientId: string;
  amount: number;
  method: string;
}

export interface PaymentUpdateInput {
  amount?: number;
  status?: "pending" | "completed" | "failed";
  method?: string;
}
