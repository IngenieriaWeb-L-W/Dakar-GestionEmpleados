import type { GraphQLResolveInfo } from "graphql";
import { FindManyInventoryMovementArgs } from "./args/FindManyInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class FindManyInventoryMovementResolver {
    inventoryMovements(ctx: any, info: GraphQLResolveInfo, args: FindManyInventoryMovementArgs): Promise<InventoryMovement[]>;
}
