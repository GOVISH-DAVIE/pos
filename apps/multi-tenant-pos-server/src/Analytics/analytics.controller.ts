import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsService } from "./analytics.service";
import { BestSellingProductInput } from "../analytics/BestSellingProductInput";
import { SalesAnalyticsOutput } from "../analytics/SalesAnalyticsOutput";
import { BestSellingProductOutput } from "../analytics/BestSellingProductOutput";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticsController {
  constructor(protected readonly service: AnalyticsService) {}

  @common.Get("/:id/get-best-selling-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetBestSellingProduct(
    @common.Body()
    body: BestSellingProductInput
  ): Promise<string> {
        return this.service.GetBestSellingProduct(body);
      }

  @common.Get("/sales-analytics")
  @swagger.ApiOkResponse({
    type: SalesAnalyticsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSalesAnalyticsByBusiness(
    @common.Body()
    body: BestSellingProductInput
  ): Promise<SalesAnalyticsOutput> {
        return this.service.GetSalesAnalyticsByBusiness(body);
      }

  @common.Get("/best-selling-product")
  @swagger.ApiOkResponse({
    type: BestSellingProductOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveBestSellingProduct(
    @common.Body()
    body: BestSellingProductInput
  ): Promise<BestSellingProductOutput> {
        return this.service.RetrieveBestSellingProduct(body);
      }
}
