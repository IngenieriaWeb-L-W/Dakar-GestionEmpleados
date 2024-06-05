import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyMaterialArgs } from "./args/DeleteManyMaterialArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMaterialResolver {
    deleteManyMaterial(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMaterialArgs): Promise<AffectedRowsOutput>;
}
