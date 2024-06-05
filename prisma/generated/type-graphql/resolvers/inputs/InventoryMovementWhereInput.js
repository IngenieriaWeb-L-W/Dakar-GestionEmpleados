"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFilter_1 = require("../inputs/EnumEnum_MovementTypeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const MaterialRelationFilter_1 = require("../inputs/MaterialRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let InventoryMovementWhereInput = class InventoryMovementWhereInput {
};
exports.InventoryMovementWhereInput = InventoryMovementWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter)
], InventoryMovementWhereInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], InventoryMovementWhereInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementWhereInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialRelationFilter_1.MaterialRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialRelationFilter_1.MaterialRelationFilter)
], InventoryMovementWhereInput.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], InventoryMovementWhereInput.prototype, "createdBy", void 0);
exports.InventoryMovementWhereInput = InventoryMovementWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementWhereInput", {})
], InventoryMovementWhereInput);
