export interface CreateInvoiceInput {
  clientId: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
  }[];
  dueDate: string; // format ISO
  notes?: string;
}

export interface InvoiceResponse {
  id: string;
  clientId: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  totalAmount: number;
  dueDate: string;
  status: "pending" | "paid" | "overdue";
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface InvoiceListResponse {
  invoices: InvoiceResponse[];
}
