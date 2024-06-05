"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementAvgOrderByAggregateInput_1 = require("../inputs/InventoryMovementAvgOrderByAggregateInput");
const InventoryMovementCountOrderByAggregateInput_1 = require("../inputs/InventoryMovementCountOrderByAggregateInput");
const InventoryMovementMaxOrderByAggregateInput_1 = require("../inputs/InventoryMovementMaxOrderByAggregateInput");
const InventoryMovementMinOrderByAggregateInput_1 = require("../inputs/InventoryMovementMinOrderByAggregateInput");
const InventoryMovementSumOrderByAggregateInput_1 = require("../inputs/InventoryMovementSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementOrderByWithAggregationInput = class InventoryMovementOrderByWithAggregationInput {
};
exports.InventoryMovementOrderByWithAggregationInput = InventoryMovementOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithAggregationInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithAggregationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithAggregationInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCountOrderByAggregateInput_1.InventoryMovementCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCountOrderByAggregateInput_1.InventoryMovementCountOrderByAggregateInput)
], InventoryMovementOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementAvgOrderByAggregateInput_1.InventoryMovementAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementAvgOrderByAggregateInput_1.InventoryMovementAvgOrderByAggregateInput)
], InventoryMovementOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMaxOrderByAggregateInput_1.InventoryMovementMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMaxOrderByAggregateInput_1.InventoryMovementMaxOrderByAggregateInput)
], InventoryMovementOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMinOrderByAggregateInput_1.InventoryMovementMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMinOrderByAggregateInput_1.InventoryMovementMinOrderByAggregateInput)
], InventoryMovementOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementSumOrderByAggregateInput_1.InventoryMovementSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementSumOrderByAggregateInput_1.InventoryMovementSumOrderByAggregateInput)
], InventoryMovementOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.InventoryMovementOrderByWithAggregationInput = InventoryMovementOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementOrderByWithAggregationInput", {})
], InventoryMovementOrderByWithAggregationInput);
