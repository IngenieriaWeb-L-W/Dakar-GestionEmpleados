"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutRoleInput = class UserCreateOrConnectWithoutRoleInput {
};
exports.UserCreateOrConnectWithoutRoleInput = UserCreateOrConnectWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutRoleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput)
], UserCreateOrConnectWithoutRoleInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutRoleInput = UserCreateOrConnectWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutRoleInput", {})
], UserCreateOrConnectWithoutRoleInput);
