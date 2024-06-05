import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { InventoryMovementListRelationFilter } from "../inputs/InventoryMovementListRelationFilter";
import { MaterialListRelationFilter } from "../inputs/MaterialListRelationFilter";
import { RoleNullableRelationFilter } from "../inputs/RoleNullableRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    roleId?: StringNullableFilter | undefined;
    role?: RoleNullableRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    materials?: MaterialListRelationFilter | undefined;
    movements?: InventoryMovementListRelationFilter | undefined;
}
