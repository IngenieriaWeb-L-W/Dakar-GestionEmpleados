import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmployeeOrThrowArgs } from "./args/FindUniqueEmployeeOrThrowArgs";
import { Employee } from "../../../models/Employee";
export declare class FindUniqueEmployeeOrThrowResolver {
    getEmployee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmployeeOrThrowArgs): Promise<Employee | null>;
}
