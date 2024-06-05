import { EnumEnum_MovementTypeFilter } from "../inputs/EnumEnum_MovementTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InventoryMovementScalarWhereInput {
    AND?: InventoryMovementScalarWhereInput[] | undefined;
    OR?: InventoryMovementScalarWhereInput[] | undefined;
    NOT?: InventoryMovementScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    movementType?: EnumEnum_MovementTypeFilter | undefined;
    quantity?: IntFilter | undefined;
    materialId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
}
