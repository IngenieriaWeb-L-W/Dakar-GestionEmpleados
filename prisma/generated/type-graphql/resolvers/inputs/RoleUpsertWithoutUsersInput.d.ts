import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersInput } from "../inputs/RoleUpdateWithoutUsersInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
export declare class RoleUpsertWithoutUsersInput {
    update: RoleUpdateWithoutUsersInput;
    create: RoleCreateWithoutUsersInput;
    where?: RoleWhereInput | undefined;
}
