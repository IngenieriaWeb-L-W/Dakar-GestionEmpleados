import { InventoryMovementCreateNestedManyWithoutMaterialInput } from "../inputs/InventoryMovementCreateNestedManyWithoutMaterialInput";
export declare class MaterialCreateWithoutCreatedByInput {
    id?: string | undefined;
    name: string;
    quantity: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movements?: InventoryMovementCreateNestedManyWithoutMaterialInput | undefined;
}
