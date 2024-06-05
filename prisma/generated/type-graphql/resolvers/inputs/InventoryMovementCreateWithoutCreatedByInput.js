"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateNestedOneWithoutMovementsInput_1 = require("../inputs/MaterialCreateNestedOneWithoutMovementsInput");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementCreateWithoutCreatedByInput = class InventoryMovementCreateWithoutCreatedByInput {
};
exports.InventoryMovementCreateWithoutCreatedByInput = InventoryMovementCreateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateWithoutCreatedByInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCreateWithoutCreatedByInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateNestedOneWithoutMovementsInput_1.MaterialCreateNestedOneWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateNestedOneWithoutMovementsInput_1.MaterialCreateNestedOneWithoutMovementsInput)
], InventoryMovementCreateWithoutCreatedByInput.prototype, "material", void 0);
exports.InventoryMovementCreateWithoutCreatedByInput = InventoryMovementCreateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateWithoutCreatedByInput", {})
], InventoryMovementCreateWithoutCreatedByInput);
