"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateNestedOneWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateNestedOneWithoutEvaluationsInput");
let EvaluationCreateInput = class EvaluationCreateInput {
};
exports.EvaluationCreateInput = EvaluationCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationCreateInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateNestedOneWithoutEvaluationsInput_1.EmployeeCreateNestedOneWithoutEvaluationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeCreateNestedOneWithoutEvaluationsInput_1.EmployeeCreateNestedOneWithoutEvaluationsInput)
], EvaluationCreateInput.prototype, "employee", void 0);
exports.EvaluationCreateInput = EvaluationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateInput", {})
], EvaluationCreateInput);
