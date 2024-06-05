"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateManyMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementCreateManyMaterialInput = class InventoryMovementCreateManyMaterialInput {
};
exports.InventoryMovementCreateManyMaterialInput = InventoryMovementCreateManyMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyMaterialInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyMaterialInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCreateManyMaterialInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyMaterialInput.prototype, "userId", void 0);
exports.InventoryMovementCreateManyMaterialInput = InventoryMovementCreateManyMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateManyMaterialInput", {})
], InventoryMovementCreateManyMaterialInput);
