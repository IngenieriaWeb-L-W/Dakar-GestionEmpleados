import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvaluationOrThrowArgs } from "./args/FindUniqueEvaluationOrThrowArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class FindUniqueEvaluationOrThrowResolver {
    getEvaluation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEvaluationOrThrowArgs): Promise<Evaluation | null>;
}
