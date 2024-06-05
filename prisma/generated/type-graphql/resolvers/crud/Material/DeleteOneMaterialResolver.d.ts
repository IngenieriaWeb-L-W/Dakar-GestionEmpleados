import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMaterialArgs } from "./args/DeleteOneMaterialArgs";
import { Material } from "../../../models/Material";
export declare class DeleteOneMaterialResolver {
    deleteOneMaterial(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMaterialArgs): Promise<Material | null>;
}
