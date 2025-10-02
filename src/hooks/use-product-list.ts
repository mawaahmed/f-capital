import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProductPrice,
  fetchProducts,
  searchProducts,
  updateProduct,
  updateProductAvailability,
  updateProductStatus,
} from "@/services/product-list-services";

import type { Product, ProductListResponse } from "@/types/product-list";

import type { UseQueryOptions } from "@tanstack/react-query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useProducts = (params?: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const page = params?.page ?? 1;
  const pageSize = params?.limit ?? 10;

  return useQuery<ProductListResponse, Error>({
    queryKey: ["products", { page, pageSize, search: params?.search }],
    queryFn: () => fetchProducts(page, pageSize),
    staleTime: 5000,
  } as UseQueryOptions<ProductListResponse, Error>);
};

export const useGetProduct = (params?: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const page = params?.page ?? 1;
  const pageSize = params?.limit ?? 10;

  return useQuery<ProductListResponse, Error>({
    queryKey: ["products", { page, pageSize, search: params?.search }],
    queryFn: () => fetchProducts(page, pageSize),
    staleTime: 5000,
  } as UseQueryOptions<ProductListResponse, Error>);
};

export const useGetProductPrice = (
  productId: number,
  supplierId: number,
  clientId: number,
  quantity: number
) => {
  return useQuery<number, Error>({
    queryKey: ["product-price", { productId, supplierId, clientId, quantity }],
    queryFn: () => fetchProductPrice(productId, supplierId, clientId, quantity),
    enabled: !!productId && quantity > 0,
    staleTime: 5000,
  } as UseQueryOptions<number, Error>);
};

export const useGetProductById = (productId: string) => {
  return useQuery<Product, Error>({
    queryKey: ["products", { search: { id: productId } }],
    queryFn: () => fetchProduct(productId),
    staleTime: 5000,
  } as UseQueryOptions<Product, Error>);
};

export const useCreateProduct = (
  onSuccess?: (data: Product) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FormData) => createProduct(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useUpdateProduct = (
  onSuccess?: (data: Product) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: FormData }) =>
      updateProduct(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteProduct = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess?.();
    },
    onError,
  });
};

export const useUpdateProductStatus = (
  onSuccess?: (data: Product) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "active" | "inactive";
    }) => updateProductStatus(id, status),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useUpdateProductAvailability = (
  onSuccess?: (data: Product) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      availability,
    }: {
      id: string;
      availability: "available" | "unavailable";
    }) => updateProductAvailability(id, availability),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useSearchProducts = (
  query: string,
  onSuccess?: (data: Product[]) => void,
  onError?: (err: unknown) => void
) => {
  return useQuery<Product[], Error>({
    queryKey: ["products", "search", query],
    queryFn: () => searchProducts(query),
    enabled: !!query,
    onSuccess,
    onError,
  } as UseQueryOptions<Product[], Error>);
};
