import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type SaleCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantitySold?: number | null;
  saleDate?: Date | null;
};
