"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMaterialsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMaterialsInput_1 = require("../inputs/UserCreateOrConnectWithoutMaterialsInput");
const UserCreateWithoutMaterialsInput_1 = require("../inputs/UserCreateWithoutMaterialsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMaterialsInput = class UserCreateNestedOneWithoutMaterialsInput {
};
exports.UserCreateNestedOneWithoutMaterialsInput = UserCreateNestedOneWithoutMaterialsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput)
], UserCreateNestedOneWithoutMaterialsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMaterialsInput_1.UserCreateOrConnectWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMaterialsInput_1.UserCreateOrConnectWithoutMaterialsInput)
], UserCreateNestedOneWithoutMaterialsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMaterialsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutMaterialsInput = UserCreateNestedOneWithoutMaterialsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMaterialsInput", {})
], UserCreateNestedOneWithoutMaterialsInput);
