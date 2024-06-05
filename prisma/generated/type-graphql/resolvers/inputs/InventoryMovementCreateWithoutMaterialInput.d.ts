import { UserCreateNestedOneWithoutMovementsInput } from "../inputs/UserCreateNestedOneWithoutMovementsInput";
export declare class InventoryMovementCreateWithoutMaterialInput {
    id?: string | undefined;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    createdBy: UserCreateNestedOneWithoutMovementsInput;
}
