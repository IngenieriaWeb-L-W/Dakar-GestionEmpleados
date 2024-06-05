import { EnumEnum_MovementTypeWithAggregatesFilter } from "../inputs/EnumEnum_MovementTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InventoryMovementScalarWhereWithAggregatesInput {
    AND?: InventoryMovementScalarWhereWithAggregatesInput[] | undefined;
    OR?: InventoryMovementScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InventoryMovementScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    movementType?: EnumEnum_MovementTypeWithAggregatesFilter | undefined;
    quantity?: IntWithAggregatesFilter | undefined;
    materialId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
