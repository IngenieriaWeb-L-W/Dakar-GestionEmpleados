import { MaterialOrderByWithRelationInput } from "../../../inputs/MaterialOrderByWithRelationInput";
import { MaterialWhereInput } from "../../../inputs/MaterialWhereInput";
import { MaterialWhereUniqueInput } from "../../../inputs/MaterialWhereUniqueInput";
export declare class AggregateMaterialArgs {
    where?: MaterialWhereInput | undefined;
    orderBy?: MaterialOrderByWithRelationInput[] | undefined;
    cursor?: MaterialWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
