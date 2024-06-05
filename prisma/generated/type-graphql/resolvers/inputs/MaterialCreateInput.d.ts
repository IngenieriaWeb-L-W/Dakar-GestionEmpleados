import { InventoryMovementCreateNestedManyWithoutMaterialInput } from "../inputs/InventoryMovementCreateNestedManyWithoutMaterialInput";
import { UserCreateNestedOneWithoutMaterialsInput } from "../inputs/UserCreateNestedOneWithoutMaterialsInput";
export declare class MaterialCreateInput {
    id?: string | undefined;
    name: string;
    quantity: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdBy: UserCreateNestedOneWithoutMaterialsInput;
    movements?: InventoryMovementCreateNestedManyWithoutMaterialInput | undefined;
}
