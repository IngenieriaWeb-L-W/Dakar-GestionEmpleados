import type { GraphQLResolveInfo } from "graphql";
import { GroupByInventoryMovementArgs } from "./args/GroupByInventoryMovementArgs";
import { InventoryMovementGroupBy } from "../../outputs/InventoryMovementGroupBy";
export declare class GroupByInventoryMovementResolver {
    groupByInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: GroupByInventoryMovementArgs): Promise<InventoryMovementGroupBy[]>;
}
