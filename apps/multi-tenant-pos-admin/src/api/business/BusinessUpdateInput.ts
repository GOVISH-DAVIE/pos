import { ClientUpdateManyWithoutBusinessesInput } from "./ClientUpdateManyWithoutBusinessesInput";
import { ProductUpdateManyWithoutBusinessesInput } from "./ProductUpdateManyWithoutBusinessesInput";
import { SaleUpdateManyWithoutBusinessesInput } from "./SaleUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  address?: string | null;
  clients?: ClientUpdateManyWithoutBusinessesInput;
  name?: string | null;
  owner?: string | null;
  products?: ProductUpdateManyWithoutBusinessesInput;
  sales?: SaleUpdateManyWithoutBusinessesInput;
};
