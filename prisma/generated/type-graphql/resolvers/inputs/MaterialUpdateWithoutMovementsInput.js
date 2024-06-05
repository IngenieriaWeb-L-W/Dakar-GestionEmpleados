"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMaterialsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMaterialsNestedInput");
let MaterialUpdateWithoutMovementsInput = class MaterialUpdateWithoutMovementsInput {
};
exports.MaterialUpdateWithoutMovementsInput = MaterialUpdateWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MaterialUpdateWithoutMovementsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MaterialUpdateWithoutMovementsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MaterialUpdateWithoutMovementsInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MaterialUpdateWithoutMovementsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MaterialUpdateWithoutMovementsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMaterialsNestedInput_1.UserUpdateOneRequiredWithoutMaterialsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMaterialsNestedInput_1.UserUpdateOneRequiredWithoutMaterialsNestedInput)
], MaterialUpdateWithoutMovementsInput.prototype, "createdBy", void 0);
exports.MaterialUpdateWithoutMovementsInput = MaterialUpdateWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateWithoutMovementsInput", {})
], MaterialUpdateWithoutMovementsInput);
