import { InventoryMovementCreateManyCreatedByInputEnvelope } from "../inputs/InventoryMovementCreateManyCreatedByInputEnvelope";
import { InventoryMovementCreateOrConnectWithoutCreatedByInput } from "../inputs/InventoryMovementCreateOrConnectWithoutCreatedByInput";
import { InventoryMovementCreateWithoutCreatedByInput } from "../inputs/InventoryMovementCreateWithoutCreatedByInput";
import { InventoryMovementWhereUniqueInput } from "../inputs/InventoryMovementWhereUniqueInput";
export declare class InventoryMovementCreateNestedManyWithoutCreatedByInput {
    create?: InventoryMovementCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput[] | undefined;
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope | undefined;
    connect?: InventoryMovementWhereUniqueInput[] | undefined;
}
