"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationOrderByWithAggregationInput_1 = require("../../../inputs/EvaluationOrderByWithAggregationInput");
const EvaluationScalarWhereWithAggregatesInput_1 = require("../../../inputs/EvaluationScalarWhereWithAggregatesInput");
const EvaluationWhereInput_1 = require("../../../inputs/EvaluationWhereInput");
const EvaluationScalarFieldEnum_1 = require("../../../../enums/EvaluationScalarFieldEnum");
let GroupByEvaluationArgs = class GroupByEvaluationArgs {
};
exports.GroupByEvaluationArgs = GroupByEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], GroupByEvaluationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationOrderByWithAggregationInput_1.EvaluationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEvaluationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationScalarFieldEnum_1.EvaluationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEvaluationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationScalarWhereWithAggregatesInput_1.EvaluationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationScalarWhereWithAggregatesInput_1.EvaluationScalarWhereWithAggregatesInput)
], GroupByEvaluationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEvaluationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEvaluationArgs.prototype, "skip", void 0);
exports.GroupByEvaluationArgs = GroupByEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEvaluationArgs);
