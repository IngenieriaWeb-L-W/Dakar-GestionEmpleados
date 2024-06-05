"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyEvaluationArgs_1 = require("./args/FindManyEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const helpers_1 = require("../../../helpers");
let FindManyEvaluationResolver = class FindManyEvaluationResolver {
    async evaluations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyEvaluationResolver = FindManyEvaluationResolver;
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
], FindManyEvaluationResolver.prototype, "evaluations", null);
exports.FindManyEvaluationResolver = FindManyEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], FindManyEvaluationResolver);
