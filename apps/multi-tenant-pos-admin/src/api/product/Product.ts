import { Business } from "../business/Business";
import { Sale } from "../sale/Sale";

export type Product = {
  business?: Business | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
