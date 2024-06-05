import { EnumEnum_MovementTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MaterialUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/MaterialUpdateOneRequiredWithoutMovementsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMovementsNestedInput";
export declare class InventoryMovementUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    movementType?: EnumEnum_MovementTypeFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    material?: MaterialUpdateOneRequiredWithoutMovementsNestedInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutMovementsNestedInput | undefined;
}
