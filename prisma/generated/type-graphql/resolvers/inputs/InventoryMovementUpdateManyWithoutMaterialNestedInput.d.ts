import { InventoryMovementCreateManyMaterialInputEnvelope } from "../inputs/InventoryMovementCreateManyMaterialInputEnvelope";
import { InventoryMovementCreateOrConnectWithoutMaterialInput } from "../inputs/InventoryMovementCreateOrConnectWithoutMaterialInput";
import { InventoryMovementCreateWithoutMaterialInput } from "../inputs/InventoryMovementCreateWithoutMaterialInput";
import { InventoryMovementScalarWhereInput } from "../inputs/InventoryMovementScalarWhereInput";
import { InventoryMovementUpdateManyWithWhereWithoutMaterialInput } from "../inputs/InventoryMovementUpdateManyWithWhereWithoutMaterialInput";
import { InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput } from "../inputs/InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput";
import { InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput } from "../inputs/InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput";
import { InventoryMovementWhereUniqueInput } from "../inputs/InventoryMovementWhereUniqueInput";
export declare class InventoryMovementUpdateManyWithoutMaterialNestedInput {
    create?: InventoryMovementCreateWithoutMaterialInput[] | undefined;
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutMaterialInput[] | undefined;
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput[] | undefined;
    createMany?: InventoryMovementCreateManyMaterialInputEnvelope | undefined;
    set?: InventoryMovementWhereUniqueInput[] | undefined;
    disconnect?: InventoryMovementWhereUniqueInput[] | undefined;
    delete?: InventoryMovementWhereUniqueInput[] | undefined;
    connect?: InventoryMovementWhereUniqueInput[] | undefined;
    update?: InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput[] | undefined;
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutMaterialInput[] | undefined;
    deleteMany?: InventoryMovementScalarWhereInput[] | undefined;
}
