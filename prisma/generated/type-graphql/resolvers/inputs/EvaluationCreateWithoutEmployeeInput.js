"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationCreateWithoutEmployeeInput = class EvaluationCreateWithoutEmployeeInput {
};
exports.EvaluationCreateWithoutEmployeeInput = EvaluationCreateWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateWithoutEmployeeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationCreateWithoutEmployeeInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateWithoutEmployeeInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateWithoutEmployeeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateWithoutEmployeeInput.prototype, "updatedAt", void 0);
exports.EvaluationCreateWithoutEmployeeInput = EvaluationCreateWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateWithoutEmployeeInput", {})
], EvaluationCreateWithoutEmployeeInput);
