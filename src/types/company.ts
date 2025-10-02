export interface Company {
  id: string;
  name: string;
  address?: string;
  email?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyInput {
  name: string;
  address?: string;
  email?: string;
  phone?: string;
}

export interface CompanyUpdateInput {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
  longitude?: string;
  latitude?: string;
  taxIdentificationNumber?: string;
  vatPercentage?: number;
  contactPerson?: string;
}
