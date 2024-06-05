import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { InventoryMovementCreateNestedManyWithoutCreatedByInput } from "../inputs/InventoryMovementCreateNestedManyWithoutCreatedByInput";
import { MaterialCreateNestedManyWithoutCreatedByInput } from "../inputs/MaterialCreateNestedManyWithoutCreatedByInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutRoleInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    materials?: MaterialCreateNestedManyWithoutCreatedByInput | undefined;
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput | undefined;
}
