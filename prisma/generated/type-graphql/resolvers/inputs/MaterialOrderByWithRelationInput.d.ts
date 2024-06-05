import { InventoryMovementOrderByRelationAggregateInput } from "../inputs/InventoryMovementOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MaterialOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    createdBy?: UserOrderByWithRelationInput | undefined;
    movements?: InventoryMovementOrderByRelationAggregateInput | undefined;
}
