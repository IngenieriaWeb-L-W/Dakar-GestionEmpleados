import { UserCreateWithoutMovementsInput } from "../inputs/UserCreateWithoutMovementsInput";
import { UserUpdateWithoutMovementsInput } from "../inputs/UserUpdateWithoutMovementsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutMovementsInput {
    update: UserUpdateWithoutMovementsInput;
    create: UserCreateWithoutMovementsInput;
    where?: UserWhereInput | undefined;
}
