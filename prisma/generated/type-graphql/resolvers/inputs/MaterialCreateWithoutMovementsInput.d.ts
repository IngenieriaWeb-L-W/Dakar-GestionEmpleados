import { UserCreateNestedOneWithoutMaterialsInput } from "../inputs/UserCreateNestedOneWithoutMaterialsInput";
export declare class MaterialCreateWithoutMovementsInput {
    id?: string | undefined;
    name: string;
    quantity: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdBy: UserCreateNestedOneWithoutMaterialsInput;
}
