import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEvaluationArgs } from "./args/CreateOneEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class CreateOneEvaluationResolver {
    createOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: CreateOneEvaluationArgs): Promise<Evaluation>;
}
