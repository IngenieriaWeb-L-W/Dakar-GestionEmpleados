import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleCreateNestedOneWithoutUsersInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
}
