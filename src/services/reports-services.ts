import baseApi from "./base-service";
import type { Report, ReportInput } from "@/types/reports";

// 📄 Générer un nouveau rapport
export const generateReport = async (
  payload: ReportInput
): Promise<Report> => {
  return (await baseApi.post("/reports/generate", payload)).data;
};
