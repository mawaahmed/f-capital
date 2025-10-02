import type {
  ProductClassification,
  CreateClassificationInput,
  UpdateClassificationInput,
  ImportClassificationInput,
} from "@/types/product-classification";
import baseApi from "./base-service";
import type { ProductClassificationTabKey } from "@/types/common";


// Create
export const createClassificationService = async (
  payload: CreateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.post("/product-classifications", payload)).data;
};

export const createProductType = async (
  payload: CreateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.post("/product-types", payload)).data;
};

export const createProductCategory = async (
  payload: CreateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.post("/product-categories", payload)).data;
};

export const createProductSubCategory = async (
  payload: CreateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.post("/product-subcategories", payload)).data;
};

// Edit (Update)
// ...existing code...

export const updateProductTypeService = async (
  id: number,
  payload: UpdateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.patch(`/product-types/${id}`, payload)).data;
};

export const updateProductCategoryService = async (
  id: number,
  payload: UpdateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.patch(`/product-categories/${id}`, payload)).data;
};

export const updateProductSubCategoryService = async (
  id: number,
  payload: UpdateClassificationInput
): Promise<ProductClassification> => {
  return (await baseApi.patch(`/product-subcategories/${id}`, payload)).data;
};

// ...existing code...


// Delete
export const deleteClassificationService = async (
  id: number,
  tab: ProductClassificationTabKey
): Promise<void> => {
  let route = "";

  switch (tab) {
    case "Product-Type":
      route = `/product-types/${id}`;
      break;
    case "Category":
      route = `/product-categories/${id}`;
      break;
    case "Subcategory":
      route = `/product-subcategories/${id}`;
      break;
    default:
      throw new Error("Unsupported classification type");
  }

  await baseApi.delete(route);
};


// View Details
export const getClassificationByIdService = async (
  id: number
): Promise<ProductClassification> => {
  return (await baseApi.get(`/product-classifications/${id}`)).data;
};

export const getProductTypes = async (): Promise<ProductClassification[]> => {
  return (await baseApi.get("/product-types")).data;
};

export const getProductCategories = async (): Promise<
  ProductClassification[]
> => {
  return (await baseApi.get(`/product-categories`)).data;
};

export const getProductSubCategories = async (): Promise<
  ProductClassification[]
> => {
  return (await baseApi.get(`/product-subcategories`)).data;
};




 
// Import (CSV or JSON)
export const importClassificationsService = async (
  payload: ImportClassificationInput
): Promise<{ imported: number }> => {
  return (await baseApi.post("/product-classifications/import", payload)).data;
};

//filtre classifications by type
export const filterClassificationsByTypeService = async (
  type: string
): Promise<ProductClassification[]> => {
  return (await baseApi.get(`/product-classifications/type/${type}`)).data;
};
