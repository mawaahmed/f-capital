export type ProductClassification = {
  id: number;
  name: string;
  description: string;
  code: string;
  isActive?: true;
  productType?: { id: string; name: string; description: string; code: string };
  productCategory?: {
    id: string;
    name: string;
    description: string;
    code: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateClassificationInput = {
  name: string;
  code: string;
  description: string;
  parentCode?: string;
  productTypeCode?: string;
  productCategoryCode?: string;
  companyId: string;
};

export type UpdateClassificationInput = {
  code?: string;
  name?: string;
  description?: string;
  isActive?: true;
};

export type ImportClassificationInput = {
  file: File;
};
export type ClassificationListResponse = {
  classifications: ProductClassification[];
  total: number;
  page: number;
  pageSize: number;
};
export type FilterClassificationsByTypeResponse = {
  classifications: ProductClassification[];
  total: number;
};
