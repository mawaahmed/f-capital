import {
  createClassificationService,
  createProductCategory,
  createProductSubCategory,
  createProductType,
  getClassificationByIdService,
  getProductCategories,
  getProductSubCategories,
  getProductTypes,
  importClassificationsService,
} from "@/services/product-classification-services";

import type {
  CreateClassificationInput,
  ImportClassificationInput,
  ProductClassification,
} from "@/types/product-classification";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateClassification = (
  onSuccess?: (data: ProductClassification) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClassificationInput) =>
      createClassificationService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product-classification"] });
      onSuccess?.(data);
    },
    onError,
  });
};

// export const useUpdateClassification = (
//   onSuccess?: (data: ProductClassification) => void,
//   onError?: (err: unknown) => void
// ) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({
//       id,
//       payload,
//     }: {
//       id: number;
//       payload: UpdateClassificationInput;
//     }) => updateClassificationService(id, payload),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({ queryKey: ["product-classification"] });
//       onSuccess?.(data);
//     },
//     onError,
//   });
// };

// export const useDeleteClassification = (
//   onSuccess?: () => void,
//   onError?: (err: unknown) => void
// ) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (id: number) => deleteClassificationService(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["product-classification"] });
//       onSuccess?.();
//     },
//     onError,
//   });
// };

export const useClassificationDetails = (id: number, enabled = true) => {
  return useQuery<ProductClassification>({
    queryKey: ["product-classification", id],
    queryFn: () => getClassificationByIdService(id),
    enabled: !!id && enabled,
  });
};

export const useGetProductTypes = (enabled = true) => {
  return useQuery<ProductClassification[]>({
    queryKey: ["product-types"],
    queryFn: () => getProductTypes(),
    enabled: enabled,
  });
};

export const useGetProductCategories = (enabled = true) => {
  return useQuery<ProductClassification[]>({
    queryKey: ["product-categories"],
    queryFn: () => getProductCategories(),
    enabled: enabled,
  });
};

export const useGetProductSubCategories = (enabled = true) => {
  return useQuery<ProductClassification[]>({
    queryKey: ["product-subcategories"],
    queryFn: () => getProductSubCategories(),
    enabled: enabled,
  });
};

export const useCreateProductType = (
  onSuccess?: (response: ProductClassification) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClassificationInput) =>
      createProductType(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["product-types"] });
      onSuccess?.(response);
    },
    onError,
  });
};

export const useCreateProductCategory = (
  onSuccess?: (response: ProductClassification) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClassificationInput) =>
      createProductCategory(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["product-categories"] });
      onSuccess?.(response);
    },
    onError,
  });
};

export const useCreateProductSubCategory = (
  onSuccess?: (response: ProductClassification) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClassificationInput) =>
      createProductSubCategory(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["product-subcategories"] });
      onSuccess?.(response);
    },
    onError,
  });
};

export const useImportClassifications = (
  onSuccess?: (data: { imported: number }) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ImportClassificationInput) =>
      importClassificationsService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product-classification"] });
      onSuccess?.(data);
    },
    onError,
  });
};
