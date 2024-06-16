import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type ProductWhereInput = {
  business?: BusinessWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  sales?: SaleListRelationFilter;
};
