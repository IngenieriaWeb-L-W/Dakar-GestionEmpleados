"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EmployeeRelationFilter_1 = require("../inputs/EmployeeRelationFilter");
const EvaluationWhereInput_1 = require("../inputs/EvaluationWhereInput");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let EvaluationWhereUniqueInput = class EvaluationWhereUniqueInput {
};
exports.EvaluationWhereUniqueInput = EvaluationWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput_1.EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput_1.EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereInput_1.EvaluationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EvaluationWhereUniqueInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], EvaluationWhereUniqueInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EvaluationWhereUniqueInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EvaluationWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeRelationFilter_1.EmployeeRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeRelationFilter_1.EmployeeRelationFilter)
], EvaluationWhereUniqueInput.prototype, "employee", void 0);
exports.EvaluationWhereUniqueInput = EvaluationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationWhereUniqueInput", {})
], EvaluationWhereUniqueInput);
