"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementOrderByRelationAggregateInput_1 = require("../inputs/InventoryMovementOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MaterialOrderByWithRelationInput = class MaterialOrderByWithRelationInput {
};
exports.MaterialOrderByWithRelationInput = MaterialOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], MaterialOrderByWithRelationInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementOrderByRelationAggregateInput_1.InventoryMovementOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementOrderByRelationAggregateInput_1.InventoryMovementOrderByRelationAggregateInput)
], MaterialOrderByWithRelationInput.prototype, "movements", void 0);
exports.MaterialOrderByWithRelationInput = MaterialOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialOrderByWithRelationInput", {})
], MaterialOrderByWithRelationInput);
