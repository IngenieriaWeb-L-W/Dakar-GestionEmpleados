import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { InventoryMovementCreateNestedManyWithoutCreatedByInput } from "../inputs/InventoryMovementCreateNestedManyWithoutCreatedByInput";
import { MaterialCreateNestedManyWithoutCreatedByInput } from "../inputs/MaterialCreateNestedManyWithoutCreatedByInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    role?: RoleCreateNestedOneWithoutUsersInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    materials?: MaterialCreateNestedManyWithoutCreatedByInput | undefined;
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput | undefined;
}
