import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvaluationArgs } from "./args/FindFirstEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class FindFirstEvaluationResolver {
    findFirstEvaluation(ctx: any, info: GraphQLResolveInfo, args: FindFirstEvaluationArgs): Promise<Evaluation | null>;
}
