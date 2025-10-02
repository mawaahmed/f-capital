export type ProductClassificationTabKey =
  | "Product-Type"
  | "Category"
  | "Subcategory"
  | "Unique-Product";

export type OrderStatus =
  | "PRECOMMANDED"
  | "PENDING"
  | "DELIVERED"
  | "CANCELLED";

export type NotificationType =
  | "SUPPLIERORDERCREATED"
  | "RETAILERORDERCREATED"
  | "SUPPLIERUPDATEDORDER"
  | "RETAILERUPDATEDORDER"
  | "ORDERUPDATED";
