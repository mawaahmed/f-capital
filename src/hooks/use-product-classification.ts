import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createClassificationService,
  getClassificationByIdService,
  deleteClassificationService,
  importClassificationsService,
  getProductTypes,
  getProductCategories,
  getProductSubCategories,
  updateProductTypeService,
  updateProductCategoryService,
  updateProductSubCategoryService,
} from "@/services/product-classification-services";

import type {
  ProductClassification,
  CreateClassificationInput,
  UpdateClassificationInput,
  ImportClassificationInput,
} from "@/types/product-classification";
import type { ProductClassificationTabKey } from "@/types/common";




// Hook pour récupérer les types de produit
export const useGetProductTypes = () => {
  return useQuery({
    queryKey: ["product-types"],
    queryFn: getProductTypes,
  });
};

// Hook pour récupérer les catégories de produit
export const useGetProductCategories = () => {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: getProductCategories,
  });
};

// Hook pour récupérer les sous-catégories
export const useGetProductSubCategories = () => {
  return useQuery({
    queryKey: ["product-subcategories"],
    queryFn: getProductSubCategories,
  });
};



export const useClassificationById = (id: number) => {
  return useQuery<ProductClassification, Error>({
    queryKey: ["product-classification", id],
    queryFn: () => getClassificationByIdService(id),
    enabled: !!id, // n'exécute pas tant que l'ID n'est pas fourni
  });
};


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

export const useUpdateProductType = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateClassificationInput }) =>
      updateProductTypeService(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-types"] });
      onSuccess?.();
    },
    onError,
  });
};

// Pour Category
export const useUpdateProductCategory = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateClassificationInput }) =>
      updateProductCategoryService(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-categories"] });
      onSuccess?.();
    },
    onError,
  });
};

// Pour Subcategory
export const useUpdateProductSubCategory = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateClassificationInput }) =>
      updateProductSubCategoryService(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-subcategories"] });
      onSuccess?.();
    },
    onError,
  });
};





export const useDeleteClassification = (
  tab: ProductClassificationTabKey,
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteClassificationService(id, tab),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-classification"] });
      onSuccess?.();
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


