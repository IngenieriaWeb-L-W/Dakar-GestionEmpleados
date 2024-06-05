import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInventoryMovementOrThrowArgs } from "./args/FindFirstInventoryMovementOrThrowArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class FindFirstInventoryMovementOrThrowResolver {
    findFirstInventoryMovementOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInventoryMovementOrThrowArgs): Promise<InventoryMovement | null>;
}
