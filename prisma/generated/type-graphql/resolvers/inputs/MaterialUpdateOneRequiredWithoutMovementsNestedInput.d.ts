import { MaterialCreateOrConnectWithoutMovementsInput } from "../inputs/MaterialCreateOrConnectWithoutMovementsInput";
import { MaterialCreateWithoutMovementsInput } from "../inputs/MaterialCreateWithoutMovementsInput";
import { MaterialUpdateToOneWithWhereWithoutMovementsInput } from "../inputs/MaterialUpdateToOneWithWhereWithoutMovementsInput";
import { MaterialUpsertWithoutMovementsInput } from "../inputs/MaterialUpsertWithoutMovementsInput";
import { MaterialWhereUniqueInput } from "../inputs/MaterialWhereUniqueInput";
export declare class MaterialUpdateOneRequiredWithoutMovementsNestedInput {
    create?: MaterialCreateWithoutMovementsInput | undefined;
    connectOrCreate?: MaterialCreateOrConnectWithoutMovementsInput | undefined;
    upsert?: MaterialUpsertWithoutMovementsInput | undefined;
    connect?: MaterialWhereUniqueInput | undefined;
    update?: MaterialUpdateToOneWithWhereWithoutMovementsInput | undefined;
}
