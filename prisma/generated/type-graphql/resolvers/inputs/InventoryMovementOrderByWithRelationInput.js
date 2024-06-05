"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialOrderByWithRelationInput_1 = require("../inputs/MaterialOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMovementOrderByWithRelationInput = class InventoryMovementOrderByWithRelationInput {
};
exports.InventoryMovementOrderByWithRelationInput = InventoryMovementOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithRelationInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithRelationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithRelationInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialOrderByWithRelationInput_1.MaterialOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialOrderByWithRelationInput_1.MaterialOrderByWithRelationInput)
], InventoryMovementOrderByWithRelationInput.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], InventoryMovementOrderByWithRelationInput.prototype, "createdBy", void 0);
exports.InventoryMovementOrderByWithRelationInput = InventoryMovementOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementOrderByWithRelationInput", {})
], InventoryMovementOrderByWithRelationInput);
