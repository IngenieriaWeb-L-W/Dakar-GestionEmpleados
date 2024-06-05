import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventoryMovementListRelationFilter } from "../inputs/InventoryMovementListRelationFilter";
import { MaterialWhereInput } from "../inputs/MaterialWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class MaterialWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: MaterialWhereInput[] | undefined;
    OR?: MaterialWhereInput[] | undefined;
    NOT?: MaterialWhereInput[] | undefined;
    quantity?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
    movements?: InventoryMovementListRelationFilter | undefined;
}
