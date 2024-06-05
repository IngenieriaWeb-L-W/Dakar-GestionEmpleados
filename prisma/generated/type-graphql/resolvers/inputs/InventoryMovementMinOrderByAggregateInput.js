"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementMinOrderByAggregateInput = class InventoryMovementMinOrderByAggregateInput {
};
exports.InventoryMovementMinOrderByAggregateInput = InventoryMovementMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinOrderByAggregateInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinOrderByAggregateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinOrderByAggregateInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinOrderByAggregateInput.prototype, "userId", void 0);
exports.InventoryMovementMinOrderByAggregateInput = InventoryMovementMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementMinOrderByAggregateInput", {})
], InventoryMovementMinOrderByAggregateInput);
