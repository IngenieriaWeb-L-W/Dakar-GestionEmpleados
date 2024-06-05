import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEmployeeArgs } from "./args/DeleteOneEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class DeleteOneEmployeeResolver {
    deleteOneEmployee(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEmployeeArgs): Promise<Employee | null>;
}
