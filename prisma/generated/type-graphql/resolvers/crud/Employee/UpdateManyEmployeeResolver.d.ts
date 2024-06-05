import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyEmployeeArgs } from "./args/UpdateManyEmployeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEmployeeResolver {
    updateManyEmployee(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmployeeArgs): Promise<AffectedRowsOutput>;
}
