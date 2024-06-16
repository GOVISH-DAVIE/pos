import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ClientCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
