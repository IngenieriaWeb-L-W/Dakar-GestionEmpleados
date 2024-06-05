import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeeArgs } from "./args/AggregateEmployeeArgs";
import { AggregateEmployee } from "../../outputs/AggregateEmployee";
export declare class AggregateEmployeeResolver {
    aggregateEmployee(ctx: any, info: GraphQLResolveInfo, args: AggregateEmployeeArgs): Promise<AggregateEmployee>;
}
