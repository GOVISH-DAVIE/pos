import { Injectable } from "@nestjs/common";
import { SalesAnalyticsInput } from "../analytics/SalesAnalyticsInput";
import { SalesAnalyticsOutput } from "../analytics/SalesAnalyticsOutput";
import { BestSellingProductInput } from "../analytics/BestSellingProductInput";
import { BestSellingProductOutput } from "../analytics/BestSellingProductOutput";

@Injectable()
export class AnalyticsService {
  constructor() {}
  async GetBestSellingProduct(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetSalesAnalyticsByBusiness(args: SalesAnalyticsInput): Promise<SalesAnalyticsOutput> {
    throw new Error("Not implemented");
  }
  async RetrieveBestSellingProduct(args: BestSellingProductInput): Promise<BestSellingProductOutput> {
    throw new Error("Not implemented");
  }
}
