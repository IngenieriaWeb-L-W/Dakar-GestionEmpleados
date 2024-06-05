"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementOrderByWithAggregationInput_1 = require("../../../inputs/InventoryMovementOrderByWithAggregationInput");
const InventoryMovementScalarWhereWithAggregatesInput_1 = require("../../../inputs/InventoryMovementScalarWhereWithAggregatesInput");
const InventoryMovementWhereInput_1 = require("../../../inputs/InventoryMovementWhereInput");
const InventoryMovementScalarFieldEnum_1 = require("../../../../enums/InventoryMovementScalarFieldEnum");
let GroupByInventoryMovementArgs = class GroupByInventoryMovementArgs {
};
exports.GroupByInventoryMovementArgs = GroupByInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], GroupByInventoryMovementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementOrderByWithAggregationInput_1.InventoryMovementOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInventoryMovementArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarFieldEnum_1.InventoryMovementScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInventoryMovementArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementScalarWhereWithAggregatesInput_1.InventoryMovementScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementScalarWhereWithAggregatesInput_1.InventoryMovementScalarWhereWithAggregatesInput)
], GroupByInventoryMovementArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInventoryMovementArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInventoryMovementArgs.prototype, "skip", void 0);
exports.GroupByInventoryMovementArgs = GroupByInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInventoryMovementArgs);
