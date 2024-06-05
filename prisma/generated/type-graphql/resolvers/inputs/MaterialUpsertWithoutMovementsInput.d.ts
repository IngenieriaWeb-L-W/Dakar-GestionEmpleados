import { MaterialCreateWithoutMovementsInput } from "../inputs/MaterialCreateWithoutMovementsInput";
import { MaterialUpdateWithoutMovementsInput } from "../inputs/MaterialUpdateWithoutMovementsInput";
import { MaterialWhereInput } from "../inputs/MaterialWhereInput";
export declare class MaterialUpsertWithoutMovementsInput {
    update: MaterialUpdateWithoutMovementsInput;
    create: MaterialCreateWithoutMovementsInput;
    where?: MaterialWhereInput | undefined;
}
