import { Business } from "../business/Business";
import { Product } from "../product/Product";

export type Sale = {
  business?: Business | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantitySold: number | null;
  saleDate: Date | null;
  updatedAt: Date;
};
