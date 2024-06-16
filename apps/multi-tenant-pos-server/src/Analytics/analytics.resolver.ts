import * as graphql from "@nestjs/graphql";
import { SalesAnalyticsInput } from "../analytics/SalesAnalyticsInput";
import { SalesAnalyticsOutput } from "../analytics/SalesAnalyticsOutput";
import { BestSellingProductInput } from "../analytics/BestSellingProductInput";
import { BestSellingProductOutput } from "../analytics/BestSellingProductOutput";
import { AnalyticsService } from "./analytics.service";

export class AnalyticsResolver {
  constructor(protected readonly service: AnalyticsService) {}

  @graphql.Query(() => String)
  async GetBestSellingProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetBestSellingProduct(args);
  }

  @graphql.Mutation(() => SalesAnalyticsOutput)
  async GetSalesAnalyticsByBusiness(
    @graphql.Args()
    args: SalesAnalyticsInput
  ): Promise<SalesAnalyticsOutput> {
    return this.service.GetSalesAnalyticsByBusiness(args);
  }

  @graphql.Query(() => BestSellingProductOutput)
  async RetrieveBestSellingProduct(
    @graphql.Args()
    args: BestSellingProductInput
  ): Promise<BestSellingProductOutput> {
    return this.service.RetrieveBestSellingProduct(args);
  }
}
