import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type BusinessWhereInput = {
  address?: StringNullableFilter;
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  products?: ProductListRelationFilter;
  sales?: SaleListRelationFilter;
};
