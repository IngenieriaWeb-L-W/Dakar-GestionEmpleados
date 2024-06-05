"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEvaluationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEvaluationOrThrowArgs_1 = require("./args/FindUniqueEvaluationOrThrowArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const helpers_1 = require("../../../helpers");
let FindUniqueEvaluationOrThrowResolver = class FindUniqueEvaluationOrThrowResolver {
    async getEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueEvaluationOrThrowResolver = FindUniqueEvaluationOrThrowResolver;
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
], FindUniqueEvaluationOrThrowResolver.prototype, "getEvaluation", null);
exports.FindUniqueEvaluationOrThrowResolver = FindUniqueEvaluationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], FindUniqueEvaluationOrThrowResolver);
