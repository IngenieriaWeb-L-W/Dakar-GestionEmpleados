"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationMinAggregate = class EvaluationMinAggregate {
};
exports.EvaluationMinAggregate = EvaluationMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinAggregate.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationMinAggregate.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinAggregate.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationMinAggregate.prototype, "updatedAt", void 0);
exports.EvaluationMinAggregate = EvaluationMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EvaluationMinAggregate", {})
], EvaluationMinAggregate);
