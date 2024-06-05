import { MaterialCreateNestedOneWithoutMovementsInput } from "../inputs/MaterialCreateNestedOneWithoutMovementsInput";
export declare class InventoryMovementCreateWithoutCreatedByInput {
    id?: string | undefined;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    material: MaterialCreateNestedOneWithoutMovementsInput;
}
