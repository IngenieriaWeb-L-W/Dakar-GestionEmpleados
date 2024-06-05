import { MaterialOrderByWithRelationInput } from "../../../inputs/MaterialOrderByWithRelationInput";
import { MaterialWhereInput } from "../../../inputs/MaterialWhereInput";
import { MaterialWhereUniqueInput } from "../../../inputs/MaterialWhereUniqueInput";
export declare class FindFirstMaterialOrThrowArgs {
    where?: MaterialWhereInput | undefined;
    orderBy?: MaterialOrderByWithRelationInput[] | undefined;
    cursor?: MaterialWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "quantity" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
