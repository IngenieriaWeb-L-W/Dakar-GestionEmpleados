import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInventoryMovementArgs } from "./args/FindFirstInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class FindFirstInventoryMovementResolver {
    findFirstInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: FindFirstInventoryMovementArgs): Promise<InventoryMovement | null>;
}
