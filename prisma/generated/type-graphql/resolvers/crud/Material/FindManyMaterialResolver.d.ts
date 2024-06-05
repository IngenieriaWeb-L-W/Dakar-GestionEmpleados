import type { GraphQLResolveInfo } from "graphql";
import { FindManyMaterialArgs } from "./args/FindManyMaterialArgs";
import { Material } from "../../../models/Material";
export declare class FindManyMaterialResolver {
    materials(ctx: any, info: GraphQLResolveInfo, args: FindManyMaterialArgs): Promise<Material[]>;
}
