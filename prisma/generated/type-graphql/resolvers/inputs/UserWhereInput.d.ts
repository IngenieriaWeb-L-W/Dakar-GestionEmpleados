import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { InventoryMovementListRelationFilter } from "../inputs/InventoryMovementListRelationFilter";
import { MaterialListRelationFilter } from "../inputs/MaterialListRelationFilter";
import { RoleNullableRelationFilter } from "../inputs/RoleNullableRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    roleId?: StringNullableFilter | undefined;
    role?: RoleNullableRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    materials?: MaterialListRelationFilter | undefined;
    movements?: InventoryMovementListRelationFilter | undefined;
}
