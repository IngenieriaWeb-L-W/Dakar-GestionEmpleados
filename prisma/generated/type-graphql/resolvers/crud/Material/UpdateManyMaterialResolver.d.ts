import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyMaterialArgs } from "./args/UpdateManyMaterialArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMaterialResolver {
    updateManyMaterial(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMaterialArgs): Promise<AffectedRowsOutput>;
}
