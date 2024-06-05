import type { GraphQLResolveInfo } from "graphql";
import { CreateOneInventoryMovementArgs } from "./args/CreateOneInventoryMovementArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class CreateOneInventoryMovementResolver {
    createOneInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: CreateOneInventoryMovementArgs): Promise<InventoryMovement>;
}
