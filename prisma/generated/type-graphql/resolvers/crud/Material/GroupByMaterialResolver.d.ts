import type { GraphQLResolveInfo } from "graphql";
import { GroupByMaterialArgs } from "./args/GroupByMaterialArgs";
import { MaterialGroupBy } from "../../outputs/MaterialGroupBy";
export declare class GroupByMaterialResolver {
    groupByMaterial(ctx: any, info: GraphQLResolveInfo, args: GroupByMaterialArgs): Promise<MaterialGroupBy[]>;
}
