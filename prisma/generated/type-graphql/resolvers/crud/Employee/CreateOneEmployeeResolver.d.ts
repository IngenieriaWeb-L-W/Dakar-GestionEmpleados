import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEmployeeArgs } from "./args/CreateOneEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class CreateOneEmployeeResolver {
    createOneEmployee(ctx: any, info: GraphQLResolveInfo, args: CreateOneEmployeeArgs): Promise<Employee>;
}
