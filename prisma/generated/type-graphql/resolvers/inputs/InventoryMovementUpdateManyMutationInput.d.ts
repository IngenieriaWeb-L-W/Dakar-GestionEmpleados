import { EnumEnum_MovementTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InventoryMovementUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    movementType?: EnumEnum_MovementTypeFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
}
