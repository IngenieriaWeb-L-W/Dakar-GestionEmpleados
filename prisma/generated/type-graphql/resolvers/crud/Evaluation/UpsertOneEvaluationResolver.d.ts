import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEvaluationArgs } from "./args/UpsertOneEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class UpsertOneEvaluationResolver {
    upsertOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEvaluationArgs): Promise<Evaluation>;
}
