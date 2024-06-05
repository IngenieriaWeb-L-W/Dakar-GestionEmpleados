"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEvaluationArgs_1 = require("./args/AggregateEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const AggregateEvaluation_1 = require("../../outputs/AggregateEvaluation");
const helpers_1 = require("../../../helpers");
let AggregateEvaluationResolver = class AggregateEvaluationResolver {
    async aggregateEvaluation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateEvaluationResolver = AggregateEvaluationResolver;
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
], AggregateEvaluationResolver.prototype, "aggregateEvaluation", null);
exports.AggregateEvaluationResolver = AggregateEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], AggregateEvaluationResolver);
