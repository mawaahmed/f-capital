import baseApi from "./base-service";
import type {
  Company,
  CompanyInput,
  CompanyUpdateInput,
} from "@/types/company";

export const createCompany = async (
  payload: CompanyInput
): Promise<Company> => {
  return (await baseApi.post("/companies", payload)).data;
};

export const fetchCompanies = async (): Promise<Company[]> => {
  return (await baseApi.get("/companies")).data;
};

export const fetchCompanyById = async (id: string): Promise<Company> => {
  return (await baseApi.get(`/companies/${id}`)).data;
};

export const updateCompany = async (
  id: string,
  payload: CompanyUpdateInput
): Promise<Company> => {
  return (await baseApi.patch(`/companies/${id}`, payload)).data;
};

export const deleteCompany = async (id: string): Promise<void> => {
  await baseApi.delete(`/companies/${id}`);
};
