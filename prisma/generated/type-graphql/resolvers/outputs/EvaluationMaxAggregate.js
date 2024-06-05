"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationMaxAggregate = class EvaluationMaxAggregate {
};
exports.EvaluationMaxAggregate = EvaluationMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMaxAggregate.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationMaxAggregate.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMaxAggregate.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EvaluationMaxAggregate.prototype, "updatedAt", void 0);
exports.EvaluationMaxAggregate = EvaluationMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EvaluationMaxAggregate", {})
], EvaluationMaxAggregate);
