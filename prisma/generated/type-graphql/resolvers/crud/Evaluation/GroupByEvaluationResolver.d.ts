import type { GraphQLResolveInfo } from "graphql";
import { GroupByEvaluationArgs } from "./args/GroupByEvaluationArgs";
import { EvaluationGroupBy } from "../../outputs/EvaluationGroupBy";
export declare class GroupByEvaluationResolver {
    groupByEvaluation(ctx: any, info: GraphQLResolveInfo, args: GroupByEvaluationArgs): Promise<EvaluationGroupBy[]>;
}
