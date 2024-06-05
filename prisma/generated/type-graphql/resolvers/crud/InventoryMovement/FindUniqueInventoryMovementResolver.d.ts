import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInventoryMovementArgs } from "./args/FindUniqueInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class FindUniqueInventoryMovementResolver {
    inventoryMovement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInventoryMovementArgs): Promise<InventoryMovement | null>;
}
