"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEvaluationArgs_1 = require("./args/UpdateManyEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEvaluationResolver = class UpdateManyEvaluationResolver {
    async updateManyEvaluation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyEvaluationResolver = UpdateManyEvaluationResolver;
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
], UpdateManyEvaluationResolver.prototype, "updateManyEvaluation", null);
exports.UpdateManyEvaluationResolver = UpdateManyEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], UpdateManyEvaluationResolver);
