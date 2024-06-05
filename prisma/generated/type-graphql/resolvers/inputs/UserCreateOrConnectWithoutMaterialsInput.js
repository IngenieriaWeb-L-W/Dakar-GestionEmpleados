"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMaterialsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMaterialsInput_1 = require("../inputs/UserCreateWithoutMaterialsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMaterialsInput = class UserCreateOrConnectWithoutMaterialsInput {
};
exports.UserCreateOrConnectWithoutMaterialsInput = UserCreateOrConnectWithoutMaterialsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMaterialsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput)
], UserCreateOrConnectWithoutMaterialsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutMaterialsInput = UserCreateOrConnectWithoutMaterialsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMaterialsInput", {})
], UserCreateOrConnectWithoutMaterialsInput);
