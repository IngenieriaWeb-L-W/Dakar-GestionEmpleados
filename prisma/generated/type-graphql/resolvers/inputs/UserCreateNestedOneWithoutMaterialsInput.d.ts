import { UserCreateOrConnectWithoutMaterialsInput } from "../inputs/UserCreateOrConnectWithoutMaterialsInput";
import { UserCreateWithoutMaterialsInput } from "../inputs/UserCreateWithoutMaterialsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMaterialsInput {
    create?: UserCreateWithoutMaterialsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMaterialsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
