import type { GraphQLResolveInfo } from "graphql";
import { Employee } from "../../../models/Employee";
import { Evaluation } from "../../../models/Evaluation";
import { EmployeeEvaluationsArgs } from "./args/EmployeeEvaluationsArgs";
export declare class EmployeeRelationsResolver {
    evaluations(employee: Employee, ctx: any, info: GraphQLResolveInfo, args: EmployeeEvaluationsArgs): Promise<Evaluation[]>;
}
