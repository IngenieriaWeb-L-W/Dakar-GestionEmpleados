"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationOrderByRelationAggregateInput_1 = require("../inputs/EvaluationOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmployeeOrderByWithRelationInput = class EmployeeOrderByWithRelationInput {
};
exports.EmployeeOrderByWithRelationInput = EmployeeOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationOrderByRelationAggregateInput_1.EvaluationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationOrderByRelationAggregateInput_1.EvaluationOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "evaluations", void 0);
exports.EmployeeOrderByWithRelationInput = EmployeeOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeOrderByWithRelationInput", {})
], EmployeeOrderByWithRelationInput);
