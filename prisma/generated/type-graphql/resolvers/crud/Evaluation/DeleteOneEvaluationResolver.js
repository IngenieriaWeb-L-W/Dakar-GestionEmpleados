"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneEvaluationArgs_1 = require("./args/DeleteOneEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const helpers_1 = require("../../../helpers");
let DeleteOneEvaluationResolver = class DeleteOneEvaluationResolver {
    async deleteOneEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneEvaluationResolver = DeleteOneEvaluationResolver;
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
], DeleteOneEvaluationResolver.prototype, "deleteOneEvaluation", null);
exports.DeleteOneEvaluationResolver = DeleteOneEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], DeleteOneEvaluationResolver);
