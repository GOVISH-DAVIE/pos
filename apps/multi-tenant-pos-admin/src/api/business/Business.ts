import { Client } from "../client/Client";
import { Product } from "../product/Product";
import { Sale } from "../sale/Sale";

export type Business = {
  address: string | null;
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  name: string | null;
  owner: string | null;
  products?: Array<Product>;
  sales?: Array<Sale>;
  updatedAt: Date;
};
