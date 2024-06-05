"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutRoleInput_1 = require("../inputs/UserUpdateWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutRoleInput = class UserUpdateWithWhereUniqueWithoutRoleInput {
};
exports.UserUpdateWithWhereUniqueWithoutRoleInput = UserUpdateWithWhereUniqueWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutRoleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRoleInput_1.UserUpdateWithoutRoleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRoleInput_1.UserUpdateWithoutRoleInput)
], UserUpdateWithWhereUniqueWithoutRoleInput.prototype, "data", void 0);
exports.UserUpdateWithWhereUniqueWithoutRoleInput = UserUpdateWithWhereUniqueWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutRoleInput", {})
], UserUpdateWithWhereUniqueWithoutRoleInput);
