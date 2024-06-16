import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { SaleCreateNestedManyWithoutProductsInput } from "./SaleCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  sales?: SaleCreateNestedManyWithoutProductsInput;
};
