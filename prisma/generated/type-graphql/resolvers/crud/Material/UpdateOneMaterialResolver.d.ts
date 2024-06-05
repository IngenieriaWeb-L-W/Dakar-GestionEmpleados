import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMaterialArgs } from "./args/UpdateOneMaterialArgs";
import { Material } from "../../../models/Material";
export declare class UpdateOneMaterialResolver {
    updateOneMaterial(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMaterialArgs): Promise<Material | null>;
}
