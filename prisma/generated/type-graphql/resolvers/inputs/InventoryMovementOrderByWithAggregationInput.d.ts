import { InventoryMovementAvgOrderByAggregateInput } from "../inputs/InventoryMovementAvgOrderByAggregateInput";
import { InventoryMovementCountOrderByAggregateInput } from "../inputs/InventoryMovementCountOrderByAggregateInput";
import { InventoryMovementMaxOrderByAggregateInput } from "../inputs/InventoryMovementMaxOrderByAggregateInput";
import { InventoryMovementMinOrderByAggregateInput } from "../inputs/InventoryMovementMinOrderByAggregateInput";
import { InventoryMovementSumOrderByAggregateInput } from "../inputs/InventoryMovementSumOrderByAggregateInput";
export declare class InventoryMovementOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    movementType?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    materialId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: InventoryMovementCountOrderByAggregateInput | undefined;
    _avg?: InventoryMovementAvgOrderByAggregateInput | undefined;
    _max?: InventoryMovementMaxOrderByAggregateInput | undefined;
    _min?: InventoryMovementMinOrderByAggregateInput | undefined;
    _sum?: InventoryMovementSumOrderByAggregateInput | undefined;
}
