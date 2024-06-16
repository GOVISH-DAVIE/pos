import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SaleWhereInput = {
  business?: BusinessWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantitySold?: IntNullableFilter;
  saleDate?: DateTimeNullableFilter;
};
