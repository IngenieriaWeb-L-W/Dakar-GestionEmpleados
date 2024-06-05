import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_RoleNameFilter } from "../inputs/EnumEnum_RoleNameFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: EnumEnum_RoleNameFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    users?: UserListRelationFilter | undefined;
}
