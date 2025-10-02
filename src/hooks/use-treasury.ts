import {
  createTreasury,
  exportTreasuryToExcel,
} from "@/services/treasuty-services";

import type { Treasury, TreasuryInput, } from "@/types/treasury";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTreasury = (
  onSuccess?: (data: Treasury) => void,
  onError?: (err: unknown) => void
) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: TreasuryInput) => createTreasury(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["treasury"] });
      onSuccess?.(data);
    },
    onError,
  });
};


export const useExportTreasury = (
  onSuccess?: (fileBlob: Blob) => void,
  onError?: (err: unknown) => void
) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => exportTreasuryToExcel(),
    onSuccess: (fileBlob) => {
      queryClient.invalidateQueries({ queryKey: ["treasury"] });
      onSuccess?.(fileBlob);
    },
    onError,
  });
};
