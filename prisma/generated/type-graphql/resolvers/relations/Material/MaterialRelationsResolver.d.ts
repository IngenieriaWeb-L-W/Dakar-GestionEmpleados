import type { GraphQLResolveInfo } from "graphql";
import { InventoryMovement } from "../../../models/InventoryMovement";
import { Material } from "../../../models/Material";
import { User } from "../../../models/User";
import { MaterialMovementsArgs } from "./args/MaterialMovementsArgs";
export declare class MaterialRelationsResolver {
    createdBy(material: Material, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    movements(material: Material, ctx: any, info: GraphQLResolveInfo, args: MaterialMovementsArgs): Promise<InventoryMovement[]>;
}
