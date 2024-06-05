import { MaterialCreateOrConnectWithoutMovementsInput } from "../inputs/MaterialCreateOrConnectWithoutMovementsInput";
import { MaterialCreateWithoutMovementsInput } from "../inputs/MaterialCreateWithoutMovementsInput";
import { MaterialWhereUniqueInput } from "../inputs/MaterialWhereUniqueInput";
export declare class MaterialCreateNestedOneWithoutMovementsInput {
    create?: MaterialCreateWithoutMovementsInput | undefined;
    connectOrCreate?: MaterialCreateOrConnectWithoutMovementsInput | undefined;
    connect?: MaterialWhereUniqueInput | undefined;
}
