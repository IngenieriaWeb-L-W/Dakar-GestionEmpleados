import { MaterialOrderByWithRelationInput } from "../inputs/MaterialOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class InventoryMovementOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    movementType?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    materialId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    material?: MaterialOrderByWithRelationInput | undefined;
    createdBy?: UserOrderByWithRelationInput | undefined;
}
