"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEvaluationArgs_1 = require("./args/AggregateEvaluationArgs");
const CreateManyEvaluationArgs_1 = require("./args/CreateManyEvaluationArgs");
const CreateOneEvaluationArgs_1 = require("./args/CreateOneEvaluationArgs");
const DeleteManyEvaluationArgs_1 = require("./args/DeleteManyEvaluationArgs");
const DeleteOneEvaluationArgs_1 = require("./args/DeleteOneEvaluationArgs");
const FindFirstEvaluationArgs_1 = require("./args/FindFirstEvaluationArgs");
const FindFirstEvaluationOrThrowArgs_1 = require("./args/FindFirstEvaluationOrThrowArgs");
const FindManyEvaluationArgs_1 = require("./args/FindManyEvaluationArgs");
const FindUniqueEvaluationArgs_1 = require("./args/FindUniqueEvaluationArgs");
const FindUniqueEvaluationOrThrowArgs_1 = require("./args/FindUniqueEvaluationOrThrowArgs");
const GroupByEvaluationArgs_1 = require("./args/GroupByEvaluationArgs");
const UpdateManyEvaluationArgs_1 = require("./args/UpdateManyEvaluationArgs");
const UpdateOneEvaluationArgs_1 = require("./args/UpdateOneEvaluationArgs");
const UpsertOneEvaluationArgs_1 = require("./args/UpsertOneEvaluationArgs");
const helpers_1 = require("../../../helpers");
const Evaluation_1 = require("../../../models/Evaluation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEvaluation_1 = require("../../outputs/AggregateEvaluation");
const EvaluationGroupBy_1 = require("../../outputs/EvaluationGroupBy");
let EvaluationCrudResolver = class EvaluationCrudResolver {
    async aggregateEvaluation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEvaluationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async evaluations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async evaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByEvaluation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.EvaluationCrudResolver = EvaluationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEvaluation_1.AggregateEvaluation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEvaluationArgs_1.AggregateEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "aggregateEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEvaluationArgs_1.CreateManyEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "createManyEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Evaluation_1.Evaluation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEvaluationArgs_1.CreateOneEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "createOneEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEvaluationArgs_1.DeleteManyEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "deleteManyEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEvaluationArgs_1.DeleteOneEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "deleteOneEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEvaluationArgs_1.FindFirstEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "findFirstEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEvaluationOrThrowArgs_1.FindFirstEvaluationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "findFirstEvaluationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Evaluation_1.Evaluation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEvaluationArgs_1.FindManyEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "evaluations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEvaluationArgs_1.FindUniqueEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "evaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEvaluationOrThrowArgs_1.FindUniqueEvaluationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "getEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EvaluationGroupBy_1.EvaluationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEvaluationArgs_1.GroupByEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "groupByEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEvaluationArgs_1.UpdateManyEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "updateManyEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Evaluation_1.Evaluation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEvaluationArgs_1.UpdateOneEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "updateOneEvaluation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Evaluation_1.Evaluation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEvaluationArgs_1.UpsertOneEvaluationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationCrudResolver.prototype, "upsertOneEvaluation", null);
exports.EvaluationCrudResolver = EvaluationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], EvaluationCrudResolver);
