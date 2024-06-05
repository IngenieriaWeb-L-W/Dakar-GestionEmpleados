import { UserCreateOrConnectWithoutMovementsInput } from "../inputs/UserCreateOrConnectWithoutMovementsInput";
import { UserCreateWithoutMovementsInput } from "../inputs/UserCreateWithoutMovementsInput";
import { UserUpdateToOneWithWhereWithoutMovementsInput } from "../inputs/UserUpdateToOneWithWhereWithoutMovementsInput";
import { UserUpsertWithoutMovementsInput } from "../inputs/UserUpsertWithoutMovementsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMovementsNestedInput {
    create?: UserCreateWithoutMovementsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMovementsInput | undefined;
    upsert?: UserUpsertWithoutMovementsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutMovementsInput | undefined;
}
