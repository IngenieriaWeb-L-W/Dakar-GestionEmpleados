"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFilter_1 = require("../inputs/EnumEnum_MovementTypeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let InventoryMovementScalarWhereInput = class InventoryMovementScalarWhereInput {
};
exports.InventoryMovementScalarWhereInput = InventoryMovementScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter)
], InventoryMovementScalarWhereInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], InventoryMovementScalarWhereInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementScalarWhereInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementScalarWhereInput.prototype, "userId", void 0);
exports.InventoryMovementScalarWhereInput = InventoryMovementScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementScalarWhereInput", {})
], InventoryMovementScalarWhereInput);
