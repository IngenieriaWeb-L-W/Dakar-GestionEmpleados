import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmployeeArgs } from "./args/FindUniqueEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class FindUniqueEmployeeResolver {
    employee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmployeeArgs): Promise<Employee | null>;
}
