import type { Product, ProductListResponse } from "@/types/product-list";
import baseApi from "./base-service";

// Lister tous les produits avec pagination
export const fetchProducts = async (
  page = 1,
  pageSize = 10
): Promise<ProductListResponse> => {
  const response = await baseApi.get("/products", {
    params: { page, limit: pageSize },
  });
  return response.data;
};

export const countProducts = async (): Promise<{ count: number }> => {
  const response = await baseApi.get("/products/count");
  return response.data;
};

// Récupérer un produit connaissant son id
export const fetchProduct = async (productId: string): Promise<Product> => {
  const response = await baseApi.get(`/products/${productId}`);
  return response.data;
};

// Récupérer le prix d'un produit connaissant le client, le founisseur et la quantité
export const fetchProductPrice = async (
  productId: number,
  supplierId: number,
  clientId: number,
  quantity: number
): Promise<number> => {
  const response = await baseApi.get(
    `/products/${productId}/price?supplierId=${supplierId}&clientId=${clientId}&quantity=${quantity}`
  );
  return response.data;
};

// Créer un nouveau produit
export const createProduct = async (payload: FormData): Promise<Product> => {
  const response = await baseApi.post("/products", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / (progressEvent.total ?? 4)
      );
      console.log(
        `Upload Progress for Product: ${progressEvent.loaded}, ${percentCompleted}%`
      );
    },
  });
  return response.data;
};

// Modifier un produit
export const updateProduct = async (
  id: string,
  payload: FormData
): Promise<Product> => {
  const response = await baseApi.patch(`/products/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / (progressEvent.total ?? 4)
      );
      console.log(
        `Upload Progress for Product: ${progressEvent.loaded}, ${percentCompleted}%`
      );
    },
  });
  return response.data;
};

// Supprimer un produit
export const deleteProduct = async (id: string): Promise<void> => {
  await baseApi.delete(`/products/${id}`);
};

// Mettre à jour le statut (active/inactive)
export const updateProductStatus = async (
  id: string,
  status: "active" | "inactive"
): Promise<Product> => {
  const response = await baseApi.patch(`/products/${id}/status`, { status });
  return response.data;
};

// Mettre à jour la disponibilité (available/unavailable)
export const updateProductAvailability = async (
  id: string,
  availability: "available" | "unavailable"
): Promise<Product> => {
  const response = await baseApi.patch(`/products/${id}/availability`, {
    availability,
  });
  return response.data;
};

// Rechercher des produits par nom
export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await baseApi.get("/products/search", {
    params: { query },
  });
  return response.data;
};
