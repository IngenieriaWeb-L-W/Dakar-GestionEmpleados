import type { GraphQLResolveInfo } from "graphql";
import { AggregateMaterialArgs } from "./args/AggregateMaterialArgs";
import { AggregateMaterial } from "../../outputs/AggregateMaterial";
export declare class AggregateMaterialResolver {
    aggregateMaterial(ctx: any, info: GraphQLResolveInfo, args: AggregateMaterialArgs): Promise<AggregateMaterial>;
}
