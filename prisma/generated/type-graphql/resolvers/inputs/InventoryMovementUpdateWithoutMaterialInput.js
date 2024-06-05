"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMovementsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMovementsNestedInput");
let InventoryMovementUpdateWithoutMaterialInput = class InventoryMovementUpdateWithoutMaterialInput {
};
exports.InventoryMovementUpdateWithoutMaterialInput = InventoryMovementUpdateWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventoryMovementUpdateWithoutMaterialInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput)
], InventoryMovementUpdateWithoutMaterialInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventoryMovementUpdateWithoutMaterialInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMovementsNestedInput_1.UserUpdateOneRequiredWithoutMovementsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMovementsNestedInput_1.UserUpdateOneRequiredWithoutMovementsNestedInput)
], InventoryMovementUpdateWithoutMaterialInput.prototype, "createdBy", void 0);
exports.InventoryMovementUpdateWithoutMaterialInput = InventoryMovementUpdateWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateWithoutMaterialInput", {})
], InventoryMovementUpdateWithoutMaterialInput);
