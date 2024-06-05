"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeWithAggregatesFilter_1 = require("../inputs/EnumEnum_MovementTypeWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let InventoryMovementScalarWhereWithAggregatesInput = class InventoryMovementScalarWhereWithAggregatesInput {
};
exports.InventoryMovementScalarWhereWithAggregatesInput = InventoryMovementScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeWithAggregatesFilter_1.EnumEnum_MovementTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeWithAggregatesFilter_1.EnumEnum_MovementTypeWithAggregatesFilter)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InventoryMovementScalarWhereWithAggregatesInput.prototype, "userId", void 0);
exports.InventoryMovementScalarWhereWithAggregatesInput = InventoryMovementScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementScalarWhereWithAggregatesInput", {})
], InventoryMovementScalarWhereWithAggregatesInput);
