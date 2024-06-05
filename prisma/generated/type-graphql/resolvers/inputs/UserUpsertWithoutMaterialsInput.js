"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMaterialsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMaterialsInput_1 = require("../inputs/UserCreateWithoutMaterialsInput");
const UserUpdateWithoutMaterialsInput_1 = require("../inputs/UserUpdateWithoutMaterialsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutMaterialsInput = class UserUpsertWithoutMaterialsInput {
};
exports.UserUpsertWithoutMaterialsInput = UserUpsertWithoutMaterialsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMaterialsInput_1.UserUpdateWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMaterialsInput_1.UserUpdateWithoutMaterialsInput)
], UserUpsertWithoutMaterialsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput)
], UserUpsertWithoutMaterialsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutMaterialsInput.prototype, "where", void 0);
exports.UserUpsertWithoutMaterialsInput = UserUpsertWithoutMaterialsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutMaterialsInput", {})
], UserUpsertWithoutMaterialsInput);
