import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMaterialArgs } from "./args/UpsertOneMaterialArgs";
import { Material } from "../../../models/Material";
export declare class UpsertOneMaterialResolver {
    upsertOneMaterial(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMaterialArgs): Promise<Material>;
}
