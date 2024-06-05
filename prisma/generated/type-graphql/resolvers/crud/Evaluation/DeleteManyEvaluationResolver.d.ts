import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyEvaluationArgs } from "./args/DeleteManyEvaluationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEvaluationResolver {
    deleteManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEvaluationArgs): Promise<AffectedRowsOutput>;
}
