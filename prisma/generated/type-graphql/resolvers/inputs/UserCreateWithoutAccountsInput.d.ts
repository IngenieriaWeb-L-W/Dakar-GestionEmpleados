import { InventoryMovementCreateNestedManyWithoutCreatedByInput } from "../inputs/InventoryMovementCreateNestedManyWithoutCreatedByInput";
import { MaterialCreateNestedManyWithoutCreatedByInput } from "../inputs/MaterialCreateNestedManyWithoutCreatedByInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    role?: RoleCreateNestedOneWithoutUsersInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    materials?: MaterialCreateNestedManyWithoutCreatedByInput | undefined;
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput | undefined;
}
