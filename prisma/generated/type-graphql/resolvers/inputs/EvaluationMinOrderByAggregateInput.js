"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EvaluationMinOrderByAggregateInput = class EvaluationMinOrderByAggregateInput {
};
exports.EvaluationMinOrderByAggregateInput = EvaluationMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.EvaluationMinOrderByAggregateInput = EvaluationMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationMinOrderByAggregateInput", {})
], EvaluationMinOrderByAggregateInput);
