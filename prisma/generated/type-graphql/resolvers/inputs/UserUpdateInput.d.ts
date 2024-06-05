import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { InventoryMovementUpdateManyWithoutCreatedByNestedInput } from "../inputs/InventoryMovementUpdateManyWithoutCreatedByNestedInput";
import { MaterialUpdateManyWithoutCreatedByNestedInput } from "../inputs/MaterialUpdateManyWithoutCreatedByNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RoleUpdateOneWithoutUsersNestedInput } from "../inputs/RoleUpdateOneWithoutUsersNestedInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: RoleUpdateOneWithoutUsersNestedInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
    materials?: MaterialUpdateManyWithoutCreatedByNestedInput | undefined;
    movements?: InventoryMovementUpdateManyWithoutCreatedByNestedInput | undefined;
}
