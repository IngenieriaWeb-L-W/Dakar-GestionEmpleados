import { MaterialCreateNestedOneWithoutMovementsInput } from "../inputs/MaterialCreateNestedOneWithoutMovementsInput";
import { UserCreateNestedOneWithoutMovementsInput } from "../inputs/UserCreateNestedOneWithoutMovementsInput";
export declare class InventoryMovementCreateInput {
    id?: string | undefined;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    material: MaterialCreateNestedOneWithoutMovementsInput;
    createdBy: UserCreateNestedOneWithoutMovementsInput;
}
