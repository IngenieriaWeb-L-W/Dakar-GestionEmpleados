import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInventoryMovementOrThrowArgs } from "./args/FindUniqueInventoryMovementOrThrowArgs";
import { InventoryMovement } from "../../../models/InventoryMovement";
export declare class FindUniqueInventoryMovementOrThrowResolver {
    getInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInventoryMovementOrThrowArgs): Promise<InventoryMovement | null>;
}
