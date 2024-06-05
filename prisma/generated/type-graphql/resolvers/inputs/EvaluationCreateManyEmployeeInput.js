"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateManyEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationCreateManyEmployeeInput = class EvaluationCreateManyEmployeeInput {
};
exports.EvaluationCreateManyEmployeeInput = EvaluationCreateManyEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateManyEmployeeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationCreateManyEmployeeInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationCreateManyEmployeeInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateManyEmployeeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationCreateManyEmployeeInput.prototype, "updatedAt", void 0);
exports.EvaluationCreateManyEmployeeInput = EvaluationCreateManyEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateManyEmployeeInput", {})
], EvaluationCreateManyEmployeeInput);
