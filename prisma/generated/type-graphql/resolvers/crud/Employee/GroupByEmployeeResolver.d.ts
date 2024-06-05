import type { GraphQLResolveInfo } from "graphql";
import { GroupByEmployeeArgs } from "./args/GroupByEmployeeArgs";
import { EmployeeGroupBy } from "../../outputs/EmployeeGroupBy";
export declare class GroupByEmployeeResolver {
    groupByEmployee(ctx: any, info: GraphQLResolveInfo, args: GroupByEmployeeArgs): Promise<EmployeeGroupBy[]>;
}
