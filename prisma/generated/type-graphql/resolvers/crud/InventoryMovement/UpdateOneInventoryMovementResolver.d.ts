import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneInventoryMovementArgs } from "./args/UpdateOneInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class UpdateOneInventoryMovementResolver {
    updateOneInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInventoryMovementArgs): Promise<InventoryMovement | null>;
}
