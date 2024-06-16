import { Business } from "../business/Business";

export type Client = {
  business?: Business | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
