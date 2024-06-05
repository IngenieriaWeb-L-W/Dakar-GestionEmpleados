import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmployeeOrThrowArgs } from "./args/FindFirstEmployeeOrThrowArgs";
import { Employee } from "../../../models/Employee";
export declare class FindFirstEmployeeOrThrowResolver {
    findFirstEmployeeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmployeeOrThrowArgs): Promise<Employee | null>;
}
