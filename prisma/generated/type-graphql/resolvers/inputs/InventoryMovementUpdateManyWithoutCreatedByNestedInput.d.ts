import { InventoryMovementCreateManyCreatedByInputEnvelope } from "../inputs/InventoryMovementCreateManyCreatedByInputEnvelope";
import { InventoryMovementCreateOrConnectWithoutCreatedByInput } from "../inputs/InventoryMovementCreateOrConnectWithoutCreatedByInput";
import { InventoryMovementCreateWithoutCreatedByInput } from "../inputs/InventoryMovementCreateWithoutCreatedByInput";
import { InventoryMovementScalarWhereInput } from "../inputs/InventoryMovementScalarWhereInput";
import { InventoryMovementUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/InventoryMovementUpdateManyWithWhereWithoutCreatedByInput";
import { InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput";
import { InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput";
import { InventoryMovementWhereUniqueInput } from "../inputs/InventoryMovementWhereUniqueInput";
export declare class InventoryMovementUpdateManyWithoutCreatedByNestedInput {
    create?: InventoryMovementCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput[] | undefined;
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope | undefined;
    set?: InventoryMovementWhereUniqueInput[] | undefined;
    disconnect?: InventoryMovementWhereUniqueInput[] | undefined;
    delete?: InventoryMovementWhereUniqueInput[] | undefined;
    connect?: InventoryMovementWhereUniqueInput[] | undefined;
    update?: InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutCreatedByInput[] | undefined;
    deleteMany?: InventoryMovementScalarWhereInput[] | undefined;
}
