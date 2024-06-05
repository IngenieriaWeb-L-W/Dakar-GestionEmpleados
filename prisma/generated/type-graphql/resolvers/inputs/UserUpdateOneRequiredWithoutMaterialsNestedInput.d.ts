import { UserCreateOrConnectWithoutMaterialsInput } from "../inputs/UserCreateOrConnectWithoutMaterialsInput";
import { UserCreateWithoutMaterialsInput } from "../inputs/UserCreateWithoutMaterialsInput";
import { UserUpdateToOneWithWhereWithoutMaterialsInput } from "../inputs/UserUpdateToOneWithWhereWithoutMaterialsInput";
import { UserUpsertWithoutMaterialsInput } from "../inputs/UserUpsertWithoutMaterialsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMaterialsNestedInput {
    create?: UserCreateWithoutMaterialsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMaterialsInput | undefined;
    upsert?: UserUpsertWithoutMaterialsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutMaterialsInput | undefined;
}
