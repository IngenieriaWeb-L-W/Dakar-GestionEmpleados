import type { GraphQLResolveInfo } from "graphql";
import { Employee } from "../../../models/Employee";
import { Evaluation } from "../../../models/Evaluation";
export declare class EvaluationRelationsResolver {
    employee(evaluation: Evaluation, ctx: any, info: GraphQLResolveInfo): Promise<Employee>;
}
