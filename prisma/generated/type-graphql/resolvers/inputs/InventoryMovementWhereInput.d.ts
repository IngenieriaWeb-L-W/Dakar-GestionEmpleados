import { EnumEnum_MovementTypeFilter } from "../inputs/EnumEnum_MovementTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MaterialRelationFilter } from "../inputs/MaterialRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class InventoryMovementWhereInput {
    AND?: InventoryMovementWhereInput[] | undefined;
    OR?: InventoryMovementWhereInput[] | undefined;
    NOT?: InventoryMovementWhereInput[] | undefined;
    id?: StringFilter | undefined;
    movementType?: EnumEnum_MovementTypeFilter | undefined;
    quantity?: IntFilter | undefined;
    materialId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    material?: MaterialRelationFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
}
