import type { NotificationType } from "@/types/common";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(text: string): string {
  if (!text) {
    return "";
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function getNotificationTitleFromType(
  notType: NotificationType
): string {
  switch (notType) {
    case "SUPPLIERORDERCREATED":
      return "New created order";
    case "RETAILERORDERCREATED":
      return "New retailer order";
    case "SUPPLIERUPDATEDORDER":
      return "Order updated";
    case "ORDERUPDATED":
      return "Order updated";
    case "RETAILERUPDATEDORDER":
      return "Retailer order update";
    default:
      return "New message";
  }
}
