"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EmployeeRelationFilter_1 = require("../inputs/EmployeeRelationFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let EvaluationWhereInput = class EvaluationWhereInput {
};
exports.EvaluationWhereInput = EvaluationWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EvaluationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EvaluationWhereInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], EvaluationWhereInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EvaluationWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeRelationFilter_1.EmployeeRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeRelationFilter_1.EmployeeRelationFilter)
], EvaluationWhereInput.prototype, "employee", void 0);
exports.EvaluationWhereInput = EvaluationWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationWhereInput", {})
], EvaluationWhereInput);
