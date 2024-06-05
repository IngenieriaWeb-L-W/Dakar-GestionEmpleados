import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEvaluationArgs } from "./args/DeleteOneEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class DeleteOneEvaluationResolver {
    deleteOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEvaluationArgs): Promise<Evaluation | null>;
}
