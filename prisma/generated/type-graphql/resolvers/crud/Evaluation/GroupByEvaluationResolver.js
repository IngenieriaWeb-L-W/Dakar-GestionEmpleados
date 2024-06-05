"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEvaluationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByEvaluationArgs_1 = require("./args/GroupByEvaluationArgs");
const Evaluation_1 = require("../../../models/Evaluation");
const EvaluationGroupBy_1 = require("../../outputs/EvaluationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEvaluationResolver = class GroupByEvaluationResolver {
    async groupByEvaluation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByEvaluationResolver = GroupByEvaluationResolver;
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
], GroupByEvaluationResolver.prototype, "groupByEvaluation", null);
exports.GroupByEvaluationResolver = GroupByEvaluationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], GroupByEvaluationResolver);
