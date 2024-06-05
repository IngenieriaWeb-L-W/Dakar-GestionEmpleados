"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementMaxOrderByAggregateInput = class InventoryMovementMaxOrderByAggregateInput {
};
exports.InventoryMovementMaxOrderByAggregateInput = InventoryMovementMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMaxOrderByAggregateInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMaxOrderByAggregateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMaxOrderByAggregateInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMaxOrderByAggregateInput.prototype, "userId", void 0);
exports.InventoryMovementMaxOrderByAggregateInput = InventoryMovementMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementMaxOrderByAggregateInput", {})
], InventoryMovementMaxOrderByAggregateInput);
