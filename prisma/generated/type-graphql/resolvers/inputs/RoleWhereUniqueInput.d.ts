import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereUniqueInput {
    id?: string | undefined;
    name?: "ADMIN" | "USER" | undefined;
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    users?: UserListRelationFilter | undefined;
}
