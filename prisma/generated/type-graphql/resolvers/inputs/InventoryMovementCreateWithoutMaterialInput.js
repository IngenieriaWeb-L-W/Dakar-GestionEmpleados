"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutMovementsInput_1 = require("../inputs/UserCreateNestedOneWithoutMovementsInput");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementCreateWithoutMaterialInput = class InventoryMovementCreateWithoutMaterialInput {
};
exports.InventoryMovementCreateWithoutMaterialInput = InventoryMovementCreateWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateWithoutMaterialInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateWithoutMaterialInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCreateWithoutMaterialInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMovementsInput_1.UserCreateNestedOneWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMovementsInput_1.UserCreateNestedOneWithoutMovementsInput)
], InventoryMovementCreateWithoutMaterialInput.prototype, "createdBy", void 0);
exports.InventoryMovementCreateWithoutMaterialInput = InventoryMovementCreateWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateWithoutMaterialInput", {})
], InventoryMovementCreateWithoutMaterialInput);
