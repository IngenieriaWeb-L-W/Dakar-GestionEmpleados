import type { GraphQLResolveInfo } from "graphql";
import { CreateManyMaterialArgs } from "./args/CreateManyMaterialArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMaterialResolver {
    createManyMaterial(ctx: any, info: GraphQLResolveInfo, args: CreateManyMaterialArgs): Promise<AffectedRowsOutput>;
}
