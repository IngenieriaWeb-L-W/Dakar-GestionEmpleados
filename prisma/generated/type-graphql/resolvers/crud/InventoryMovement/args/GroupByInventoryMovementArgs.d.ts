import { InventoryMovementOrderByWithAggregationInput } from "../../../inputs/InventoryMovementOrderByWithAggregationInput";
import { InventoryMovementScalarWhereWithAggregatesInput } from "../../../inputs/InventoryMovementScalarWhereWithAggregatesInput";
import { InventoryMovementWhereInput } from "../../../inputs/InventoryMovementWhereInput";
export declare class GroupByInventoryMovementArgs {
    where?: InventoryMovementWhereInput | undefined;
    orderBy?: InventoryMovementOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "movementType" | "quantity" | "materialId" | "userId">;
    having?: InventoryMovementScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
