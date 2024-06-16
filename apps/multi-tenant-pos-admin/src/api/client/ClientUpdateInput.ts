import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ClientUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
