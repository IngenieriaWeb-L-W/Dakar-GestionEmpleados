"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateNestedManyWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateNestedManyWithoutEmployeeInput");
let EmployeeCreateInput = class EmployeeCreateInput {
};
exports.EmployeeCreateInput = EmployeeCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateInput.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeCreateInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeCreateInput.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateNestedManyWithoutEmployeeInput_1.EvaluationCreateNestedManyWithoutEmployeeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationCreateNestedManyWithoutEmployeeInput_1.EvaluationCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateInput.prototype, "evaluations", void 0);
exports.EmployeeCreateInput = EmployeeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeCreateInput", {})
], EmployeeCreateInput);
