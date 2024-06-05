import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMaterialOrThrowArgs } from "./args/FindUniqueMaterialOrThrowArgs";
import { Material } from "../../../models/Material";
export declare class FindUniqueMaterialOrThrowResolver {
    getMaterial(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMaterialOrThrowArgs): Promise<Material | null>;
}
