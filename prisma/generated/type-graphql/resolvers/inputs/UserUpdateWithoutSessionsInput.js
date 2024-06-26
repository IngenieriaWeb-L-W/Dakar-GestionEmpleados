"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const InventoryMovementUpdateManyWithoutCreatedByNestedInput_1 = require("../inputs/InventoryMovementUpdateManyWithoutCreatedByNestedInput");
const MaterialUpdateManyWithoutCreatedByNestedInput_1 = require("../inputs/MaterialUpdateManyWithoutCreatedByNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RoleUpdateOneWithoutUsersNestedInput_1 = require("../inputs/RoleUpdateOneWithoutUsersNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutSessionsInput = class UserUpdateWithoutSessionsInput {
};
exports.UserUpdateWithoutSessionsInput = UserUpdateWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateOneWithoutUsersNestedInput_1.RoleUpdateOneWithoutUsersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateOneWithoutUsersNestedInput_1.RoleUpdateOneWithoutUsersNestedInput)
], UserUpdateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateManyWithoutCreatedByNestedInput_1.MaterialUpdateManyWithoutCreatedByNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialUpdateManyWithoutCreatedByNestedInput_1.MaterialUpdateManyWithoutCreatedByNestedInput)
], UserUpdateWithoutSessionsInput.prototype, "materials", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateManyWithoutCreatedByNestedInput_1.InventoryMovementUpdateManyWithoutCreatedByNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateManyWithoutCreatedByNestedInput_1.InventoryMovementUpdateManyWithoutCreatedByNestedInput)
], UserUpdateWithoutSessionsInput.prototype, "movements", void 0);
exports.UserUpdateWithoutSessionsInput = UserUpdateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutSessionsInput", {})
], UserUpdateWithoutSessionsInput);
