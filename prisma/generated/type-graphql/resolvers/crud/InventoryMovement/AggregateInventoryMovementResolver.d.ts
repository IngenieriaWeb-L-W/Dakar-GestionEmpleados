import type { GraphQLResolveInfo } from "graphql";
import { AggregateInventoryMovementArgs } from "./args/AggregateInventoryMovementArgs";
import { AggregateInventoryMovement } from "../../outputs/AggregateInventoryMovement";
export declare class AggregateInventoryMovementResolver {
    aggregateInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: AggregateInventoryMovementArgs): Promise<AggregateInventoryMovement>;
}
