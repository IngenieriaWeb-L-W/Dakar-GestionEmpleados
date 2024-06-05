"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_MovementTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_MovementTypeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InventoryMovementUpdateManyMutationInput = class InventoryMovementUpdateManyMutationInput {
};
exports.InventoryMovementUpdateManyMutationInput = InventoryMovementUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventoryMovementUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_MovementTypeFieldUpdateOperationsInput_1.EnumEnum_MovementTypeFieldUpdateOperationsInput)
], InventoryMovementUpdateManyMutationInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventoryMovementUpdateManyMutationInput.prototype, "quantity", void 0);
exports.InventoryMovementUpdateManyMutationInput = InventoryMovementUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateManyMutationInput", {})
], InventoryMovementUpdateManyMutationInput);
