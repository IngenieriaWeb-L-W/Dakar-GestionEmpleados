"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementAvgOrderByAggregateInput = class InventoryMovementAvgOrderByAggregateInput {
};
exports.InventoryMovementAvgOrderByAggregateInput = InventoryMovementAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementAvgOrderByAggregateInput.prototype, "quantity", void 0);
exports.InventoryMovementAvgOrderByAggregateInput = InventoryMovementAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementAvgOrderByAggregateInput", {})
], InventoryMovementAvgOrderByAggregateInput);
