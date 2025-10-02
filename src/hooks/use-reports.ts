import { generateReport } from "@/services/reports-services";
import type { Report, ReportInput } from "@/types/reports";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useGenerateReport = (
  onSuccess?: (data: Report) => void,
  onError?: (err: unknown) => void
) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ReportInput) => generateReport(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
      onSuccess?.(data);
    },
    onError,
  });
};
