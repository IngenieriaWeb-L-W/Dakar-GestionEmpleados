import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateOrConnectWithoutRoleInput } from "../inputs/UserCreateOrConnectWithoutRoleInput";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutRoleInput {
    create?: UserCreateWithoutRoleInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput[] | undefined;
    createMany?: UserCreateManyRoleInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
