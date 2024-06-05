"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RoleNameFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let EnumEnum_RoleNameFieldUpdateOperationsInput = class EnumEnum_RoleNameFieldUpdateOperationsInput {
};
exports.EnumEnum_RoleNameFieldUpdateOperationsInput = EnumEnum_RoleNameFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RoleNameFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumEnum_RoleNameFieldUpdateOperationsInput = EnumEnum_RoleNameFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RoleNameFieldUpdateOperationsInput", {})
], EnumEnum_RoleNameFieldUpdateOperationsInput);
