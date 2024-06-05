import { MaterialOrderByWithAggregationInput } from "../../../inputs/MaterialOrderByWithAggregationInput";
import { MaterialScalarWhereWithAggregatesInput } from "../../../inputs/MaterialScalarWhereWithAggregatesInput";
import { MaterialWhereInput } from "../../../inputs/MaterialWhereInput";
export declare class GroupByMaterialArgs {
    where?: MaterialWhereInput | undefined;
    orderBy?: MaterialOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "quantity" | "userId" | "createdAt" | "updatedAt">;
    having?: MaterialScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
