import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateToOneWithWhereWithoutUsersInput } from "../inputs/RoleUpdateToOneWithWhereWithoutUsersInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneWithoutUsersNestedInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RoleUpsertWithoutUsersInput | undefined;
    disconnect?: RoleWhereInput | undefined;
    delete?: RoleWhereInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateToOneWithWhereWithoutUsersInput | undefined;
}
