"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EvaluationSumOrderByAggregateInput = class EvaluationSumOrderByAggregateInput {
};
exports.EvaluationSumOrderByAggregateInput = EvaluationSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EvaluationSumOrderByAggregateInput.prototype, "performance", void 0);
exports.EvaluationSumOrderByAggregateInput = EvaluationSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationSumOrderByAggregateInput", {})
], EvaluationSumOrderByAggregateInput);
