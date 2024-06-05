"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserUpdateWithoutRoleInput_1 = require("../inputs/UserUpdateWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutRoleInput = class UserUpsertWithWhereUniqueWithoutRoleInput {
};
exports.UserUpsertWithWhereUniqueWithoutRoleInput = UserUpsertWithWhereUniqueWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutRoleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRoleInput_1.UserUpdateWithoutRoleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRoleInput_1.UserUpdateWithoutRoleInput)
], UserUpsertWithWhereUniqueWithoutRoleInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput)
], UserUpsertWithWhereUniqueWithoutRoleInput.prototype, "create", void 0);
exports.UserUpsertWithWhereUniqueWithoutRoleInput = UserUpsertWithWhereUniqueWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutRoleInput", {})
], UserUpsertWithWhereUniqueWithoutRoleInput);
