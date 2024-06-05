import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmployeeArgs } from "./args/FindFirstEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class FindFirstEmployeeResolver {
    findFirstEmployee(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmployeeArgs): Promise<Employee | null>;
}
