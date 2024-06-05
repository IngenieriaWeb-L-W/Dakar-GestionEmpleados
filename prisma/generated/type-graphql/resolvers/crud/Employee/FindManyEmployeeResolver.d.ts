import type { GraphQLResolveInfo } from "graphql";
import { FindManyEmployeeArgs } from "./args/FindManyEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class FindManyEmployeeResolver {
    employees(ctx: any, info: GraphQLResolveInfo, args: FindManyEmployeeArgs): Promise<Employee[]>;
}
