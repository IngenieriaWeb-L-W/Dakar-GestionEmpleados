import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventoryMovementListRelationFilter } from "../inputs/InventoryMovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class MaterialWhereInput {
    AND?: MaterialWhereInput[] | undefined;
    OR?: MaterialWhereInput[] | undefined;
    NOT?: MaterialWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    quantity?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
    movements?: InventoryMovementListRelationFilter | undefined;
}
