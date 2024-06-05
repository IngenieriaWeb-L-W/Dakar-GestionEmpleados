"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaterialSumOrderByAggregateInput = class MaterialSumOrderByAggregateInput {
};
exports.MaterialSumOrderByAggregateInput = MaterialSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialSumOrderByAggregateInput.prototype, "quantity", void 0);
exports.MaterialSumOrderByAggregateInput = MaterialSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialSumOrderByAggregateInput", {})
], MaterialSumOrderByAggregateInput);
