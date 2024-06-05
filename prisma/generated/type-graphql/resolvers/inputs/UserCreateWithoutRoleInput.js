"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const InventoryMovementCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateNestedManyWithoutCreatedByInput");
const MaterialCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/MaterialCreateNestedManyWithoutCreatedByInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutRoleInput = class UserCreateWithoutRoleInput {
};
exports.UserCreateWithoutRoleInput = UserCreateWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoleInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoleInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoleInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRoleInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoleInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutRoleInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutRoleInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutRoleInput.prototype, "materials", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateNestedManyWithoutCreatedByInput_1.InventoryMovementCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateNestedManyWithoutCreatedByInput_1.InventoryMovementCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutRoleInput.prototype, "movements", void 0);
exports.UserCreateWithoutRoleInput = UserCreateWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutRoleInput", {})
], UserCreateWithoutRoleInput);
