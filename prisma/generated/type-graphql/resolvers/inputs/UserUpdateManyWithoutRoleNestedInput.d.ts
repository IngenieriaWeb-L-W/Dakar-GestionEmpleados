import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateOrConnectWithoutRoleInput } from "../inputs/UserCreateOrConnectWithoutRoleInput";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRoleInput } from "../inputs/UserUpdateManyWithWhereWithoutRoleInput";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoleInput";
import { UserUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutRoleNestedInput {
    create?: UserCreateWithoutRoleInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | undefined;
    createMany?: UserCreateManyRoleInputEnvelope | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
