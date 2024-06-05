"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_RoleNameFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RoleNameFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutRoleNestedInput_1 = require("../inputs/UserUpdateManyWithoutRoleNestedInput");
let RoleUpdateInput = class RoleUpdateInput {
};
exports.RoleUpdateInput = RoleUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RoleNameFieldUpdateOperationsInput_1.EnumEnum_RoleNameFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RoleNameFieldUpdateOperationsInput_1.EnumEnum_RoleNameFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleNestedInput_1.UserUpdateManyWithoutRoleNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutRoleNestedInput_1.UserUpdateManyWithoutRoleNestedInput)
], RoleUpdateInput.prototype, "users", void 0);
exports.RoleUpdateInput = RoleUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateInput", {})
], RoleUpdateInput);
