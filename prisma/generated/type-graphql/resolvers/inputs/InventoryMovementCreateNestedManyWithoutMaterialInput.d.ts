import { InventoryMovementCreateManyMaterialInputEnvelope } from "../inputs/InventoryMovementCreateManyMaterialInputEnvelope";
import { InventoryMovementCreateOrConnectWithoutMaterialInput } from "../inputs/InventoryMovementCreateOrConnectWithoutMaterialInput";
import { InventoryMovementCreateWithoutMaterialInput } from "../inputs/InventoryMovementCreateWithoutMaterialInput";
import { InventoryMovementWhereUniqueInput } from "../inputs/InventoryMovementWhereUniqueInput";
export declare class InventoryMovementCreateNestedManyWithoutMaterialInput {
    create?: InventoryMovementCreateWithoutMaterialInput[] | undefined;
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutMaterialInput[] | undefined;
    createMany?: InventoryMovementCreateManyMaterialInputEnvelope | undefined;
    connect?: InventoryMovementWhereUniqueInput[] | undefined;
}
