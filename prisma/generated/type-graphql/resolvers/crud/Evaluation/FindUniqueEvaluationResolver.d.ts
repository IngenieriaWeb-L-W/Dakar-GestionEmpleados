import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvaluationArgs } from "./args/FindUniqueEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class FindUniqueEvaluationResolver {
    evaluation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEvaluationArgs): Promise<Evaluation | null>;
}
