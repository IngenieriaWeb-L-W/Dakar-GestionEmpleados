"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Employee_1 = require("../../../models/Employee");
const Evaluation_1 = require("../../../models/Evaluation");
const helpers_1 = require("../../../helpers");
let EvaluationRelationsResolver = class EvaluationRelationsResolver {
    async employee(evaluation, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).evaluation.findUniqueOrThrow({
            where: {
                id: evaluation.id,
            },
        }).employee({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.EvaluationRelationsResolver = EvaluationRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Employee_1.Employee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Evaluation_1.Evaluation, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluationRelationsResolver.prototype, "employee", null);
exports.EvaluationRelationsResolver = EvaluationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Evaluation_1.Evaluation)
], EvaluationRelationsResolver);
