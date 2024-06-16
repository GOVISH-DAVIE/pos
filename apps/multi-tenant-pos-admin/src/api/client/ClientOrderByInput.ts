import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
