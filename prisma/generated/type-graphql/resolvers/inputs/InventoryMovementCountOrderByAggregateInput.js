"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementCountOrderByAggregateInput = class InventoryMovementCountOrderByAggregateInput {
};
exports.InventoryMovementCountOrderByAggregateInput = InventoryMovementCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCountOrderByAggregateInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCountOrderByAggregateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCountOrderByAggregateInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCountOrderByAggregateInput.prototype, "userId", void 0);
exports.InventoryMovementCountOrderByAggregateInput = InventoryMovementCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCountOrderByAggregateInput", {})
], InventoryMovementCountOrderByAggregateInput);
