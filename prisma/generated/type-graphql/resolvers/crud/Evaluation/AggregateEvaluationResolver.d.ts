import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvaluationArgs } from "./args/AggregateEvaluationArgs";
import { AggregateEvaluation } from "../../outputs/AggregateEvaluation";
export declare class AggregateEvaluationResolver {
    aggregateEvaluation(ctx: any, info: GraphQLResolveInfo, args: AggregateEvaluationArgs): Promise<AggregateEvaluation>;
}
