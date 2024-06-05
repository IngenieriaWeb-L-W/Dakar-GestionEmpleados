import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmployeeArgs } from "./args/UpsertOneEmployeeArgs";
import { Employee } from "../../../models/Employee";
export declare class UpsertOneEmployeeResolver {
    upsertOneEmployee(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEmployeeArgs): Promise<Employee>;
}
