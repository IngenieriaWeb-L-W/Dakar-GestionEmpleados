"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryMovementCountAggregate = class InventoryMovementCountAggregate {
};
exports.InventoryMovementCountAggregate = InventoryMovementCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCountAggregate.prototype, "_all", void 0);
exports.InventoryMovementCountAggregate = InventoryMovementCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMovementCountAggregate", {})
], InventoryMovementCountAggregate);
