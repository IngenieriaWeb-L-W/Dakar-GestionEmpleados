import { EnumEnum_MovementTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMovementsNestedInput";
export declare class InventoryMovementUpdateWithoutMaterialInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    movementType?: EnumEnum_MovementTypeFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutMovementsNestedInput | undefined;
}
