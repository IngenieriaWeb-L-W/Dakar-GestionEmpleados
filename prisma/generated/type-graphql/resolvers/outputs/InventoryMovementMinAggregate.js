"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementMinAggregate = class InventoryMovementMinAggregate {
};
exports.InventoryMovementMinAggregate = InventoryMovementMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinAggregate.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementMinAggregate.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinAggregate.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementMinAggregate.prototype, "userId", void 0);
exports.InventoryMovementMinAggregate = InventoryMovementMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMovementMinAggregate", {})
], InventoryMovementMinAggregate);
