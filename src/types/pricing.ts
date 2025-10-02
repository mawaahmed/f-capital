export type Pricing = {
  id: string;
  minimumQuantity: number;
  maximumQuantity: number;
  unitPrice: number;
  company: {
    id: string;
    name: string;
  };
  clientCategory: {
    id: string;
    name: string;
  };
  product: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type PricingInput = {
  minimumQuantity: number;
  maximumQuantity: number;
  unitPrice: number;
  companyId: string;
  clientCategoryId: string;
  productId: string;
};
export type PricingUpdateInput = Partial<PricingInput>;
