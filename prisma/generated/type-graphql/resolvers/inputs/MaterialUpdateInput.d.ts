import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InventoryMovementUpdateManyWithoutMaterialNestedInput } from "../inputs/InventoryMovementUpdateManyWithoutMaterialNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMaterialsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMaterialsNestedInput";
export declare class MaterialUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutMaterialsNestedInput | undefined;
    movements?: InventoryMovementUpdateManyWithoutMaterialNestedInput | undefined;
}
