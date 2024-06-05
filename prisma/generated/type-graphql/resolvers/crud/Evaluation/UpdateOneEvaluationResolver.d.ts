import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEvaluationArgs } from "./args/UpdateOneEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class UpdateOneEvaluationResolver {
    updateOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEvaluationArgs): Promise<Evaluation | null>;
}
