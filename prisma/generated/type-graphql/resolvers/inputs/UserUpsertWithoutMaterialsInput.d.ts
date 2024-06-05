import { UserCreateWithoutMaterialsInput } from "../inputs/UserCreateWithoutMaterialsInput";
import { UserUpdateWithoutMaterialsInput } from "../inputs/UserUpdateWithoutMaterialsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutMaterialsInput {
    update: UserUpdateWithoutMaterialsInput;
    create: UserCreateWithoutMaterialsInput;
    where?: UserWhereInput | undefined;
}
