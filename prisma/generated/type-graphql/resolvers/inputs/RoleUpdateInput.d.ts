import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_RoleNameFieldUpdateOperationsInput } from "../inputs/EnumEnum_RoleNameFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRoleNestedInput } from "../inputs/UserUpdateManyWithoutRoleNestedInput";
export declare class RoleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: EnumEnum_RoleNameFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    users?: UserUpdateManyWithoutRoleNestedInput | undefined;
}
