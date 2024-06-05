import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";
export declare class RoleCreateInput {
    id?: string | undefined;
    name: "ADMIN" | "USER";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    users?: UserCreateNestedManyWithoutRoleInput | undefined;
}
