import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class SalesAnalyticsInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    businessId!: string;

    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;
}

export { SalesAnalyticsInput as SalesAnalyticsInput };