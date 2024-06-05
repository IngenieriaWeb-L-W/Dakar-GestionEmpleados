"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementOrderByWithRelationInput_1 = require("../../../inputs/InventoryMovementOrderByWithRelationInput");
const InventoryMovementWhereInput_1 = require("../../../inputs/InventoryMovementWhereInput");
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
let AggregateInventoryMovementArgs = class AggregateInventoryMovementArgs {
};
exports.AggregateInventoryMovementArgs = AggregateInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], AggregateInventoryMovementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementOrderByWithRelationInput_1.InventoryMovementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateInventoryMovementArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], AggregateInventoryMovementArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInventoryMovementArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInventoryMovementArgs.prototype, "skip", void 0);
exports.AggregateInventoryMovementArgs = AggregateInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateInventoryMovementArgs);
