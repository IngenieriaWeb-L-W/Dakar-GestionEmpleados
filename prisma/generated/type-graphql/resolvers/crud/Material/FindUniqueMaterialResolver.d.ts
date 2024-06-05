import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMaterialArgs } from "./args/FindUniqueMaterialArgs";
import { Material } from "../../../models/Material";
export declare class FindUniqueMaterialResolver {
    material(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMaterialArgs): Promise<Material | null>;
}
