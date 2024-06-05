import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMaterialArgs } from "./args/CreateOneMaterialArgs";
import { Material } from "../../../models/Material";
export declare class CreateOneMaterialResolver {
    createOneMaterial(ctx: any, info: GraphQLResolveInfo, args: CreateOneMaterialArgs): Promise<Material>;
}
