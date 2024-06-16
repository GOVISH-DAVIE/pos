import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  business?: BusinessWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
