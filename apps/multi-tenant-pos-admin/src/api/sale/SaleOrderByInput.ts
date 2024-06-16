import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantitySold?: SortOrder;
  saleDate?: SortOrder;
  updatedAt?: SortOrder;
};
