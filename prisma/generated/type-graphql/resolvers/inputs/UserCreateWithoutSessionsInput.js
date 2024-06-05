"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const InventoryMovementCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateNestedManyWithoutCreatedByInput");
const MaterialCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/MaterialCreateNestedManyWithoutCreatedByInput");
const RoleCreateNestedOneWithoutUsersInput_1 = require("../inputs/RoleCreateNestedOneWithoutUsersInput");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateNestedOneWithoutUsersInput_1.RoleCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateNestedOneWithoutUsersInput_1.RoleCreateNestedOneWithoutUsersInput)
], UserCreateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutSessionsInput.prototype, "materials", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateNestedManyWithoutCreatedByInput_1.InventoryMovementCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateNestedManyWithoutCreatedByInput_1.InventoryMovementCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutSessionsInput.prototype, "movements", void 0);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {})
], UserCreateWithoutSessionsInput);
