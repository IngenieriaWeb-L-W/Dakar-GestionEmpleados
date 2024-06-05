import { EnumEnum_MovementTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MaterialUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/MaterialUpdateOneRequiredWithoutMovementsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InventoryMovementUpdateWithoutCreatedByInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    movementType?: EnumEnum_MovementTypeFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    material?: MaterialUpdateOneRequiredWithoutMovementsNestedInput | undefined;
}
