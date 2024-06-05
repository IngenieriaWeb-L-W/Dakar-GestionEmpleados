import { MaterialCreateInput } from "../../../inputs/MaterialCreateInput";
import { MaterialUpdateInput } from "../../../inputs/MaterialUpdateInput";
import { MaterialWhereUniqueInput } from "../../../inputs/MaterialWhereUniqueInput";
export declare class UpsertOneMaterialArgs {
    where: MaterialWhereUniqueInput;
    create: MaterialCreateInput;
    update: MaterialUpdateInput;
}
