import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { SaleUpdateManyWithoutProductsInput } from "./SaleUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  sales?: SaleUpdateManyWithoutProductsInput;
};
