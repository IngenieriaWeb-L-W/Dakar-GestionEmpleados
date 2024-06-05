"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InventoryMovementUpdateManyWithoutMaterialNestedInput_1 = require("../inputs/InventoryMovementUpdateManyWithoutMaterialNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MaterialUpdateWithoutCreatedByInput = class MaterialUpdateWithoutCreatedByInput {
};
exports.MaterialUpdateWithoutCreatedByInput = MaterialUpdateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateManyWithoutMaterialNestedInput_1.InventoryMovementUpdateManyWithoutMaterialNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateManyWithoutMaterialNestedInput_1.InventoryMovementUpdateManyWithoutMaterialNestedInput)
], MaterialUpdateWithoutCreatedByInput.prototype, "movements", void 0);
exports.MaterialUpdateWithoutCreatedByInput = MaterialUpdateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateWithoutCreatedByInput", {})
], MaterialUpdateWithoutCreatedByInput);
