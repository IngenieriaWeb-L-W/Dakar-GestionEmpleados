"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementAvgAggregate_1 = require("../outputs/InventoryMovementAvgAggregate");
const InventoryMovementCountAggregate_1 = require("../outputs/InventoryMovementCountAggregate");
const InventoryMovementMaxAggregate_1 = require("../outputs/InventoryMovementMaxAggregate");
const InventoryMovementMinAggregate_1 = require("../outputs/InventoryMovementMinAggregate");
const InventoryMovementSumAggregate_1 = require("../outputs/InventoryMovementSumAggregate");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementGroupBy = class InventoryMovementGroupBy {
};
exports.InventoryMovementGroupBy = InventoryMovementGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementGroupBy.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementGroupBy.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementGroupBy.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCountAggregate_1.InventoryMovementCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCountAggregate_1.InventoryMovementCountAggregate)
], InventoryMovementGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementAvgAggregate_1.InventoryMovementAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementAvgAggregate_1.InventoryMovementAvgAggregate)
], InventoryMovementGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementSumAggregate_1.InventoryMovementSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementSumAggregate_1.InventoryMovementSumAggregate)
], InventoryMovementGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMinAggregate_1.InventoryMovementMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMinAggregate_1.InventoryMovementMinAggregate)
], InventoryMovementGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMaxAggregate_1.InventoryMovementMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMaxAggregate_1.InventoryMovementMaxAggregate)
], InventoryMovementGroupBy.prototype, "_max", void 0);
exports.InventoryMovementGroupBy = InventoryMovementGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMovementGroupBy", {})
], InventoryMovementGroupBy);
