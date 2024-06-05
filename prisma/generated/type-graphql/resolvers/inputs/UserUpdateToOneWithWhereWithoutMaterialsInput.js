"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutMaterialsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutMaterialsInput_1 = require("../inputs/UserUpdateWithoutMaterialsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutMaterialsInput = class UserUpdateToOneWithWhereWithoutMaterialsInput {
};
exports.UserUpdateToOneWithWhereWithoutMaterialsInput = UserUpdateToOneWithWhereWithoutMaterialsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutMaterialsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMaterialsInput_1.UserUpdateWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMaterialsInput_1.UserUpdateWithoutMaterialsInput)
], UserUpdateToOneWithWhereWithoutMaterialsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutMaterialsInput = UserUpdateToOneWithWhereWithoutMaterialsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutMaterialsInput", {})
], UserUpdateToOneWithWhereWithoutMaterialsInput);
