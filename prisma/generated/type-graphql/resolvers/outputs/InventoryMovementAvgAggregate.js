"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryMovementAvgAggregate = class InventoryMovementAvgAggregate {
};
exports.InventoryMovementAvgAggregate = InventoryMovementAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementAvgAggregate.prototype, "quantity", void 0);
exports.InventoryMovementAvgAggregate = InventoryMovementAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMovementAvgAggregate", {})
], InventoryMovementAvgAggregate);
