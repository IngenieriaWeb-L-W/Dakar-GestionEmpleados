import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMaterialArgs } from "./args/FindFirstMaterialArgs";
import { Material } from "../../../models/Material";
export declare class FindFirstMaterialResolver {
    findFirstMaterial(ctx: any, info: GraphQLResolveInfo, args: FindFirstMaterialArgs): Promise<Material | null>;
}
