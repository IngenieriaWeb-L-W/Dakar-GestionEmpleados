"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateWithoutEvaluationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmployeeCreateWithoutEvaluationsInput = class EmployeeCreateWithoutEvaluationsInput {
};
exports.EmployeeCreateWithoutEvaluationsInput = EmployeeCreateWithoutEvaluationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateWithoutEvaluationsInput.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeCreateWithoutEvaluationsInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeCreateWithoutEvaluationsInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeCreateWithoutEvaluationsInput.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateWithoutEvaluationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeCreateWithoutEvaluationsInput.prototype, "updatedAt", void 0);
exports.EmployeeCreateWithoutEvaluationsInput = EmployeeCreateWithoutEvaluationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeCreateWithoutEvaluationsInput", {})
], EmployeeCreateWithoutEvaluationsInput);
