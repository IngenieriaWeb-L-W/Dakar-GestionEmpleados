import { MaterialCreateManyCreatedByInputEnvelope } from "../inputs/MaterialCreateManyCreatedByInputEnvelope";
import { MaterialCreateOrConnectWithoutCreatedByInput } from "../inputs/MaterialCreateOrConnectWithoutCreatedByInput";
import { MaterialCreateWithoutCreatedByInput } from "../inputs/MaterialCreateWithoutCreatedByInput";
import { MaterialScalarWhereInput } from "../inputs/MaterialScalarWhereInput";
import { MaterialUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/MaterialUpdateManyWithWhereWithoutCreatedByInput";
import { MaterialUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/MaterialUpdateWithWhereUniqueWithoutCreatedByInput";
import { MaterialUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/MaterialUpsertWithWhereUniqueWithoutCreatedByInput";
import { MaterialWhereUniqueInput } from "../inputs/MaterialWhereUniqueInput";
export declare class MaterialUpdateManyWithoutCreatedByNestedInput {
    create?: MaterialCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: MaterialCreateOrConnectWithoutCreatedByInput[] | undefined;
    upsert?: MaterialUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;
    createMany?: MaterialCreateManyCreatedByInputEnvelope | undefined;
    set?: MaterialWhereUniqueInput[] | undefined;
    disconnect?: MaterialWhereUniqueInput[] | undefined;
    delete?: MaterialWhereUniqueInput[] | undefined;
    connect?: MaterialWhereUniqueInput[] | undefined;
    update?: MaterialUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;
    updateMany?: MaterialUpdateManyWithWhereWithoutCreatedByInput[] | undefined;
    deleteMany?: MaterialScalarWhereInput[] | undefined;
}
