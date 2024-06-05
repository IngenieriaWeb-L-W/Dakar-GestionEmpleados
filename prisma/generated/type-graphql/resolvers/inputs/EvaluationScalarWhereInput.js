"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let EvaluationScalarWhereInput = class EvaluationScalarWhereInput {
};
exports.EvaluationScalarWhereInput = EvaluationScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EvaluationScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EvaluationScalarWhereInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], EvaluationScalarWhereInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EvaluationScalarWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationScalarWhereInput.prototype, "updatedAt", void 0);
exports.EvaluationScalarWhereInput = EvaluationScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationScalarWhereInput", {})
], EvaluationScalarWhereInput);
