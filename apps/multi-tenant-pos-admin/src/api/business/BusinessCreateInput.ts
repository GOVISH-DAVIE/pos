import { ClientCreateNestedManyWithoutBusinessesInput } from "./ClientCreateNestedManyWithoutBusinessesInput";
import { ProductCreateNestedManyWithoutBusinessesInput } from "./ProductCreateNestedManyWithoutBusinessesInput";
import { SaleCreateNestedManyWithoutBusinessesInput } from "./SaleCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  address?: string | null;
  clients?: ClientCreateNestedManyWithoutBusinessesInput;
  name?: string | null;
  owner?: string | null;
  products?: ProductCreateNestedManyWithoutBusinessesInput;
  sales?: SaleCreateNestedManyWithoutBusinessesInput;
};
