"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const MaterialCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/MaterialCreateNestedManyWithoutCreatedByInput");
const RoleCreateNestedOneWithoutUsersInput_1 = require("../inputs/RoleCreateNestedOneWithoutUsersInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutMovementsInput = class UserCreateWithoutMovementsInput {
};
exports.UserCreateWithoutMovementsInput = UserCreateWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMovementsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMovementsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMovementsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutMovementsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMovementsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateNestedOneWithoutUsersInput_1.RoleCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateNestedOneWithoutUsersInput_1.RoleCreateNestedOneWithoutUsersInput)
], UserCreateWithoutMovementsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutMovementsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutMovementsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateNestedManyWithoutCreatedByInput_1.MaterialCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutMovementsInput.prototype, "materials", void 0);
exports.UserCreateWithoutMovementsInput = UserCreateWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutMovementsInput", {})
], UserCreateWithoutMovementsInput);
