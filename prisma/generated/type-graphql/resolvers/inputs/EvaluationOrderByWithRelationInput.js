"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeOrderByWithRelationInput_1 = require("../inputs/EmployeeOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EvaluationOrderByWithRelationInput = class EvaluationOrderByWithRelationInput {
};
exports.EvaluationOrderByWithRelationInput = EvaluationOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithRelationInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithRelationInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], EvaluationOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeOrderByWithRelationInput_1.EmployeeOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeOrderByWithRelationInput_1.EmployeeOrderByWithRelationInput)
], EvaluationOrderByWithRelationInput.prototype, "employee", void 0);
exports.EvaluationOrderByWithRelationInput = EvaluationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationOrderByWithRelationInput", {})
], EvaluationOrderByWithRelationInput);
