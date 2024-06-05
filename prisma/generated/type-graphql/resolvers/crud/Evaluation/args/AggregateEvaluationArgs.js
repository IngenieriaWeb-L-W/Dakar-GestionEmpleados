"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationOrderByWithRelationInput_1 = require("../../../inputs/EvaluationOrderByWithRelationInput");
const EvaluationWhereInput_1 = require("../../../inputs/EvaluationWhereInput");
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let AggregateEvaluationArgs = class AggregateEvaluationArgs {
};
exports.AggregateEvaluationArgs = AggregateEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], AggregateEvaluationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationOrderByWithRelationInput_1.EvaluationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEvaluationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], AggregateEvaluationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEvaluationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEvaluationArgs.prototype, "skip", void 0);
exports.AggregateEvaluationArgs = AggregateEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEvaluationArgs);
