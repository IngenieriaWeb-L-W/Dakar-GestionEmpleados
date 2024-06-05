import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMaterialOrThrowArgs } from "./args/FindFirstMaterialOrThrowArgs";
import { Material } from "../../../models/Material";
export declare class FindFirstMaterialOrThrowResolver {
    findFirstMaterialOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstMaterialOrThrowArgs): Promise<Material | null>;
}
