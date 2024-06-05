import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyEvaluationArgs } from "./args/UpdateManyEvaluationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEvaluationResolver {
    updateManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEvaluationArgs): Promise<AffectedRowsOutput>;
}
