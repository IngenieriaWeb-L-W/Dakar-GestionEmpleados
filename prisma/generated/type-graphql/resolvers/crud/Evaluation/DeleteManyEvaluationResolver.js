"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyEvaluationArgs_1 = require("./args/DeleteManyEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyEvaluationResolver = class DeleteManyEvaluationResolver {
    async deleteManyEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyEvaluationResolver = DeleteManyEvaluationResolver;
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
], DeleteManyEvaluationResolver.prototype, "deleteManyEvaluation", null);
exports.DeleteManyEvaluationResolver = DeleteManyEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], DeleteManyEvaluationResolver);
