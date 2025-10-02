import baseApi from "./base-service";
import type { Treasury, TreasuryInput } from "@/types/treasury";


export const createTreasury = async (
  payload: TreasuryInput
): Promise<Treasury> => {
  return (await baseApi.post("/treasury", payload)).data;
};


export const exportTreasuryToExcel = async (): Promise<Blob> => {
  const response = await baseApi.get("/treasury/export", {
    responseType: "blob", // pour récupérer le fichier en binaire
  });
  return response.data;
};
