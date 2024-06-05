import type { GraphQLResolveInfo } from "graphql";
import { FindManyEvaluationArgs } from "./args/FindManyEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
export declare class FindManyEvaluationResolver {
    evaluations(ctx: any, info: GraphQLResolveInfo, args: FindManyEvaluationArgs): Promise<Evaluation[]>;
}
