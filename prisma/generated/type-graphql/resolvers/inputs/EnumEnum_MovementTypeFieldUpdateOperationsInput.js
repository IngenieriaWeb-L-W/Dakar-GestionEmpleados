"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_MovementTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let EnumEnum_MovementTypeFieldUpdateOperationsInput = class EnumEnum_MovementTypeFieldUpdateOperationsInput {
};
exports.EnumEnum_MovementTypeFieldUpdateOperationsInput = EnumEnum_MovementTypeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_MovementTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumEnum_MovementTypeFieldUpdateOperationsInput = EnumEnum_MovementTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_MovementTypeFieldUpdateOperationsInput", {})
], EnumEnum_MovementTypeFieldUpdateOperationsInput);
