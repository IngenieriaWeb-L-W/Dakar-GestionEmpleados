"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EmployeeWhereInput_1 = require("../inputs/EmployeeWhereInput");
const EvaluationListRelationFilter_1 = require("../inputs/EvaluationListRelationFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let EmployeeWhereUniqueInput = class EmployeeWhereUniqueInput {
};
exports.EmployeeWhereUniqueInput = EmployeeWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeWhereInput_1.EmployeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmployeeWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeWhereInput_1.EmployeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmployeeWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeWhereInput_1.EmployeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmployeeWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmployeeWhereUniqueInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmployeeWhereUniqueInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EmployeeWhereUniqueInput.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmployeeWhereUniqueInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmployeeWhereUniqueInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], EmployeeWhereUniqueInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], EmployeeWhereUniqueInput.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EmployeeWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EmployeeWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationListRelationFilter_1.EvaluationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationListRelationFilter_1.EvaluationListRelationFilter)
], EmployeeWhereUniqueInput.prototype, "evaluations", void 0);
exports.EmployeeWhereUniqueInput = EmployeeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeWhereUniqueInput", {})
], EmployeeWhereUniqueInput);
