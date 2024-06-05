import type { GraphQLResolveInfo } from "graphql";
import { CreateManyEvaluationArgs } from "./args/CreateManyEvaluationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEvaluationResolver {
    createManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: CreateManyEvaluationArgs): Promise<AffectedRowsOutput>;
}
