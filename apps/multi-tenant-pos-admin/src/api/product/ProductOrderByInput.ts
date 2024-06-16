import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
