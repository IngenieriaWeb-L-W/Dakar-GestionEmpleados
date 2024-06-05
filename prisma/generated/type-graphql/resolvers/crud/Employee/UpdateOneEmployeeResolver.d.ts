import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmployeeArgs } from "./args/UpdateOneEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class UpdateOneEmployeeResolver {
    updateOneEmployee(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEmployeeArgs): Promise<Employee | null>;
}
