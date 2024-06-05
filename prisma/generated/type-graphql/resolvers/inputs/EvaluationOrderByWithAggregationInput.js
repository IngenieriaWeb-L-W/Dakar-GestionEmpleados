"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationAvgOrderByAggregateInput_1 = require("../inputs/EvaluationAvgOrderByAggregateInput");
const EvaluationCountOrderByAggregateInput_1 = require("../inputs/EvaluationCountOrderByAggregateInput");
const EvaluationMaxOrderByAggregateInput_1 = require("../inputs/EvaluationMaxOrderByAggregateInput");
const EvaluationMinOrderByAggregateInput_1 = require("../inputs/EvaluationMinOrderByAggregateInput");
const EvaluationSumOrderByAggregateInput_1 = require("../inputs/EvaluationSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EvaluationOrderByWithAggregationInput = class EvaluationOrderByWithAggregationInput {
};
exports.EvaluationOrderByWithAggregationInput = EvaluationOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithAggregationInput.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithAggregationInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], EvaluationOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCountOrderByAggregateInput_1.EvaluationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationCountOrderByAggregateInput_1.EvaluationCountOrderByAggregateInput)
], EvaluationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationAvgOrderByAggregateInput_1.EvaluationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationAvgOrderByAggregateInput_1.EvaluationAvgOrderByAggregateInput)
], EvaluationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationMaxOrderByAggregateInput_1.EvaluationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationMaxOrderByAggregateInput_1.EvaluationMaxOrderByAggregateInput)
], EvaluationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationMinOrderByAggregateInput_1.EvaluationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationMinOrderByAggregateInput_1.EvaluationMinOrderByAggregateInput)
], EvaluationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationSumOrderByAggregateInput_1.EvaluationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationSumOrderByAggregateInput_1.EvaluationSumOrderByAggregateInput)
], EvaluationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.EvaluationOrderByWithAggregationInput = EvaluationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationOrderByWithAggregationInput", {})
], EvaluationOrderByWithAggregationInput);
