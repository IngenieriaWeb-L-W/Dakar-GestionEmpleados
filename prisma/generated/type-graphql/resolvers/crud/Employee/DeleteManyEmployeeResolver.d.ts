import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyEmployeeArgs } from "./args/DeleteManyEmployeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEmployeeResolver {
    deleteManyEmployee(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmployeeArgs): Promise<AffectedRowsOutput>;
}
