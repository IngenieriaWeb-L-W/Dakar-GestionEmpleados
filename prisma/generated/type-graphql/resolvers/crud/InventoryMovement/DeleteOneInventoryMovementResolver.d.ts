import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneInventoryMovementArgs } from "./args/DeleteOneInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class DeleteOneInventoryMovementResolver {
    deleteOneInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInventoryMovementArgs): Promise<InventoryMovement | null>;
}
