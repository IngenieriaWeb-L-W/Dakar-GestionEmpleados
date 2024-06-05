"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventoryMovement = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementAvgAggregate_1 = require("../outputs/InventoryMovementAvgAggregate");
const InventoryMovementCountAggregate_1 = require("../outputs/InventoryMovementCountAggregate");
const InventoryMovementMaxAggregate_1 = require("../outputs/InventoryMovementMaxAggregate");
const InventoryMovementMinAggregate_1 = require("../outputs/InventoryMovementMinAggregate");
const InventoryMovementSumAggregate_1 = require("../outputs/InventoryMovementSumAggregate");
let AggregateInventoryMovement = class AggregateInventoryMovement {
};
exports.AggregateInventoryMovement = AggregateInventoryMovement;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCountAggregate_1.InventoryMovementCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCountAggregate_1.InventoryMovementCountAggregate)
], AggregateInventoryMovement.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementAvgAggregate_1.InventoryMovementAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementAvgAggregate_1.InventoryMovementAvgAggregate)
], AggregateInventoryMovement.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementSumAggregate_1.InventoryMovementSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementSumAggregate_1.InventoryMovementSumAggregate)
], AggregateInventoryMovement.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMinAggregate_1.InventoryMovementMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMinAggregate_1.InventoryMovementMinAggregate)
], AggregateInventoryMovement.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementMaxAggregate_1.InventoryMovementMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementMaxAggregate_1.InventoryMovementMaxAggregate)
], AggregateInventoryMovement.prototype, "_max", void 0);
exports.AggregateInventoryMovement = AggregateInventoryMovement = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInventoryMovement", {})
], AggregateInventoryMovement);
