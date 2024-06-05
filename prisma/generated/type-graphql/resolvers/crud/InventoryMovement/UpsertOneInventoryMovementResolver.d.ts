import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneInventoryMovementArgs } from "./args/UpsertOneInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class UpsertOneInventoryMovementResolver {
    upsertOneInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInventoryMovementArgs): Promise<InventoryMovement>;
}
