import { UserCreateOrConnectWithoutMovementsInput } from "../inputs/UserCreateOrConnectWithoutMovementsInput";
import { UserCreateWithoutMovementsInput } from "../inputs/UserCreateWithoutMovementsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMovementsInput {
    create?: UserCreateWithoutMovementsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMovementsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
