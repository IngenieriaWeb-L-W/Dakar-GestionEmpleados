"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_RoleNameFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RoleNameFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoleUpdateWithoutUsersInput = class RoleUpdateWithoutUsersInput {
};
exports.RoleUpdateWithoutUsersInput = RoleUpdateWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RoleNameFieldUpdateOperationsInput_1.EnumEnum_RoleNameFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RoleNameFieldUpdateOperationsInput_1.EnumEnum_RoleNameFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "updatedAt", void 0);
exports.RoleUpdateWithoutUsersInput = RoleUpdateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateWithoutUsersInput", {})
], RoleUpdateWithoutUsersInput);
