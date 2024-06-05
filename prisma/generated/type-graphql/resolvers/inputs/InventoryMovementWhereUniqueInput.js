"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFilter_1 = require("../inputs/EnumEnum_MovementTypeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const InventoryMovementWhereInput_1 = require("../inputs/InventoryMovementWhereInput");
const MaterialRelationFilter_1 = require("../inputs/MaterialRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let InventoryMovementWhereUniqueInput = class InventoryMovementWhereUniqueInput {
};
exports.InventoryMovementWhereUniqueInput = InventoryMovementWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput_1.InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput_1.InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereInput_1.InventoryMovementWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFilter_1.EnumEnum_MovementTypeFilter)
], InventoryMovementWhereUniqueInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], InventoryMovementWhereUniqueInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementWhereUniqueInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryMovementWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialRelationFilter_1.MaterialRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialRelationFilter_1.MaterialRelationFilter)
], InventoryMovementWhereUniqueInput.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], InventoryMovementWhereUniqueInput.prototype, "createdBy", void 0);
exports.InventoryMovementWhereUniqueInput = InventoryMovementWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementWhereUniqueInput", {})
], InventoryMovementWhereUniqueInput);
