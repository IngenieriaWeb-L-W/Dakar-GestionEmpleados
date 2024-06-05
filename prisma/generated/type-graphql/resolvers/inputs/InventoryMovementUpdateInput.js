"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MaterialUpdateOneRequiredWithoutMovementsNestedInput_1 = require("../inputs/MaterialUpdateOneRequiredWithoutMovementsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMovementsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMovementsNestedInput");
let InventoryMovementUpdateInput = class InventoryMovementUpdateInput {
};
exports.InventoryMovementUpdateInput = InventoryMovementUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventoryMovementUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput)
], InventoryMovementUpdateInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventoryMovementUpdateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateOneRequiredWithoutMovementsNestedInput_1.MaterialUpdateOneRequiredWithoutMovementsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialUpdateOneRequiredWithoutMovementsNestedInput_1.MaterialUpdateOneRequiredWithoutMovementsNestedInput)
], InventoryMovementUpdateInput.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMovementsNestedInput_1.UserUpdateOneRequiredWithoutMovementsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMovementsNestedInput_1.UserUpdateOneRequiredWithoutMovementsNestedInput)
], InventoryMovementUpdateInput.prototype, "createdBy", void 0);
exports.InventoryMovementUpdateInput = InventoryMovementUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateInput", {})
], InventoryMovementUpdateInput);
