export interface Product {
  id: string;
  code: string;
  description: string;
  name: string;
  imageUrls: string[];
  price: number;
  availableQuantity: number;
  maximumOrderingPrice: number;
  minimumOrderedQuantity: number;
  minimumOrderingPrice: number;
  companyId: string;
  company: {
    id: string;
    name: string;
  };
  unit: string;
  unitPrice: number;
  origin: string;
  status: "active" | "inactive";
  isActive: boolean;
  productType: {
    id: string;
    code: string;
    description: string;
    name: string;
  };
  productCategory: {
    id: string;
    code: string;
    description: string;
    name: string;
  };
  productSubCategory: {
    id: string;
    code: string;
    description: string;
    name: string;
  };
}

export interface CreateProductInput {
  name: string;
  description: string;
  images?: File[];
  code?: string;
  availableQuantity: number;
  minimumOrderedQuantity: number;
  minimumOrderingPrice: number;
  maximumOrderingPrice: number;
  unit: string;
  unitPrice: number;
  productOrigin: string;
  productTypeCode: string;
  productCategoryCode: string;
  productSubcategoryCode: string;
  isActive: boolean;
  companyId: string;
}

export interface UpdateProductInput {
  id: string;
  name?: string;
  category?: string;
  price?: number;
  status?: "active" | "inactive";
  availability?: "available" | "unavailable";
  description?: string;
  code?: string;
  availableQuantity?: number;
  minimumOrderedQuantity?: number;
  minimumOrderingPrice?: number;
  maximumOrderingPrice?: number;
  unit?: string;
}
export interface ProductListResponse {
  items: Product[];
  links: any;
  meta: any;
}
