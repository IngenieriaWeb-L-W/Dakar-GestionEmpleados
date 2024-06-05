import type { GraphQLResolveInfo } from "graphql";
import { CreateManyEmployeeArgs } from "./args/CreateManyEmployeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEmployeeResolver {
    createManyEmployee(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmployeeArgs): Promise<AffectedRowsOutput>;
}
