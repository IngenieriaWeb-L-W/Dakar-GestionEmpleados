import type { GraphQLResolveInfo } from "graphql";
import { InventoryMovement } from "../../../models/InventoryMovement";
import { Material } from "../../../models/Material";
import { User } from "../../../models/User";
export declare class InventoryMovementRelationsResolver {
    material(inventoryMovement: InventoryMovement, ctx: any, info: GraphQLResolveInfo): Promise<Material>;
    createdBy(inventoryMovement: InventoryMovement, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
