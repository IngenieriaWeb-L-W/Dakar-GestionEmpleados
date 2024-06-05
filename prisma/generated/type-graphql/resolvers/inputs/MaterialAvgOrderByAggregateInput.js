"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaterialAvgOrderByAggregateInput = class MaterialAvgOrderByAggregateInput {
};
exports.MaterialAvgOrderByAggregateInput = MaterialAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialAvgOrderByAggregateInput.prototype, "quantity", void 0);
exports.MaterialAvgOrderByAggregateInput = MaterialAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialAvgOrderByAggregateInput", {})
], MaterialAvgOrderByAggregateInput);
