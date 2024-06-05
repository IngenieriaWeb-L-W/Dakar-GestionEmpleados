import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvaluationOrThrowArgs } from "./args/FindFirstEvaluationOrThrowArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class FindFirstEvaluationOrThrowResolver {
    findFirstEvaluationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEvaluationOrThrowArgs): Promise<Evaluation | null>;
}
