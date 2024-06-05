import { MaterialCreateManyCreatedByInputEnvelope } from "../inputs/MaterialCreateManyCreatedByInputEnvelope";
import { MaterialCreateOrConnectWithoutCreatedByInput } from "../inputs/MaterialCreateOrConnectWithoutCreatedByInput";
import { MaterialCreateWithoutCreatedByInput } from "../inputs/MaterialCreateWithoutCreatedByInput";
import { MaterialWhereUniqueInput } from "../inputs/MaterialWhereUniqueInput";
export declare class MaterialCreateNestedManyWithoutCreatedByInput {
    create?: MaterialCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: MaterialCreateOrConnectWithoutCreatedByInput[] | undefined;
    createMany?: MaterialCreateManyCreatedByInputEnvelope | undefined;
    connect?: MaterialWhereUniqueInput[] | undefined;
}
