"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialAvgOrderByAggregateInput_1 = require("../inputs/MaterialAvgOrderByAggregateInput");
const MaterialCountOrderByAggregateInput_1 = require("../inputs/MaterialCountOrderByAggregateInput");
const MaterialMaxOrderByAggregateInput_1 = require("../inputs/MaterialMaxOrderByAggregateInput");
const MaterialMinOrderByAggregateInput_1 = require("../inputs/MaterialMinOrderByAggregateInput");
const MaterialSumOrderByAggregateInput_1 = require("../inputs/MaterialSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MaterialOrderByWithAggregationInput = class MaterialOrderByWithAggregationInput {
};
exports.MaterialOrderByWithAggregationInput = MaterialOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCountOrderByAggregateInput_1.MaterialCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCountOrderByAggregateInput_1.MaterialCountOrderByAggregateInput)
], MaterialOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialAvgOrderByAggregateInput_1.MaterialAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialAvgOrderByAggregateInput_1.MaterialAvgOrderByAggregateInput)
], MaterialOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMaxOrderByAggregateInput_1.MaterialMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMaxOrderByAggregateInput_1.MaterialMaxOrderByAggregateInput)
], MaterialOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMinOrderByAggregateInput_1.MaterialMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMinOrderByAggregateInput_1.MaterialMinOrderByAggregateInput)
], MaterialOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialSumOrderByAggregateInput_1.MaterialSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialSumOrderByAggregateInput_1.MaterialSumOrderByAggregateInput)
], MaterialOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.MaterialOrderByWithAggregationInput = MaterialOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialOrderByWithAggregationInput", {})
], MaterialOrderByWithAggregationInput);
