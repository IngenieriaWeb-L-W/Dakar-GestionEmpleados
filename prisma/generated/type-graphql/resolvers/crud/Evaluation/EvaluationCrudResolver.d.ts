import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvaluationArgs } from "./args/AggregateEvaluationArgs";
import { CreateManyEvaluationArgs } from "./args/CreateManyEvaluationArgs";
import { CreateOneEvaluationArgs } from "./args/CreateOneEvaluationArgs";
import { DeleteManyEvaluationArgs } from "./args/DeleteManyEvaluationArgs";
import { DeleteOneEvaluationArgs } from "./args/DeleteOneEvaluationArgs";
import { FindFirstEvaluationArgs } from "./args/FindFirstEvaluationArgs";
import { FindFirstEvaluationOrThrowArgs } from "./args/FindFirstEvaluationOrThrowArgs";
import { FindManyEvaluationArgs } from "./args/FindManyEvaluationArgs";
import { FindUniqueEvaluationArgs } from "./args/FindUniqueEvaluationArgs";
import { FindUniqueEvaluationOrThrowArgs } from "./args/FindUniqueEvaluationOrThrowArgs";
import { GroupByEvaluationArgs } from "./args/GroupByEvaluationArgs";
import { UpdateManyEvaluationArgs } from "./args/UpdateManyEvaluationArgs";
import { UpdateOneEvaluationArgs } from "./args/UpdateOneEvaluationArgs";
import { UpsertOneEvaluationArgs } from "./args/UpsertOneEvaluationArgs";
import { Evaluation } from "../../../models/Evaluation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEvaluation } from "../../outputs/AggregateEvaluation";
import { EvaluationGroupBy } from "../../outputs/EvaluationGroupBy";
export declare class EvaluationCrudResolver {
    aggregateEvaluation(ctx: any, info: GraphQLResolveInfo, args: AggregateEvaluationArgs): Promise<AggregateEvaluation>;
    createManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: CreateManyEvaluationArgs): Promise<AffectedRowsOutput>;
    createOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: CreateOneEvaluationArgs): Promise<Evaluation>;
    deleteManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEvaluationArgs): Promise<AffectedRowsOutput>;
    deleteOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEvaluationArgs): Promise<Evaluation | null>;
    findFirstEvaluation(ctx: any, info: GraphQLResolveInfo, args: FindFirstEvaluationArgs): Promise<Evaluation | null>;
    findFirstEvaluationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEvaluationOrThrowArgs): Promise<Evaluation | null>;
    evaluations(ctx: any, info: GraphQLResolveInfo, args: FindManyEvaluationArgs): Promise<Evaluation[]>;
    evaluation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEvaluationArgs): Promise<Evaluation | null>;
    getEvaluation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEvaluationOrThrowArgs): Promise<Evaluation | null>;
    groupByEvaluation(ctx: any, info: GraphQLResolveInfo, args: GroupByEvaluationArgs): Promise<EvaluationGroupBy[]>;
    updateManyEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEvaluationArgs): Promise<AffectedRowsOutput>;
    updateOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEvaluationArgs): Promise<Evaluation | null>;
    upsertOneEvaluation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEvaluationArgs): Promise<Evaluation>;
}