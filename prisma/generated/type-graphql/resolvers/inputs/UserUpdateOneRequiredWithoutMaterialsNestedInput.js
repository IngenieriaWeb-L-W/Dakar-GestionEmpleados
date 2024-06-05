"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMaterialsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMaterialsInput_1 = require("../inputs/UserCreateOrConnectWithoutMaterialsInput");
const UserCreateWithoutMaterialsInput_1 = require("../inputs/UserCreateWithoutMaterialsInput");
const UserUpdateToOneWithWhereWithoutMaterialsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutMaterialsInput");
const UserUpsertWithoutMaterialsInput_1 = require("../inputs/UserUpsertWithoutMaterialsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMaterialsNestedInput = class UserUpdateOneRequiredWithoutMaterialsNestedInput {
};
exports.UserUpdateOneRequiredWithoutMaterialsNestedInput = UserUpdateOneRequiredWithoutMaterialsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMaterialsInput_1.UserCreateWithoutMaterialsInput)
], UserUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMaterialsInput_1.UserCreateOrConnectWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMaterialsInput_1.UserCreateOrConnectWithoutMaterialsInput)
], UserUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutMaterialsInput_1.UserUpsertWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutMaterialsInput_1.UserUpsertWithoutMaterialsInput)
], UserUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutMaterialsInput_1.UserUpdateToOneWithWhereWithoutMaterialsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutMaterialsInput_1.UserUpdateToOneWithWhereWithoutMaterialsInput)
], UserUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutMaterialsNestedInput = UserUpdateOneRequiredWithoutMaterialsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMaterialsNestedInput", {})
], UserUpdateOneRequiredWithoutMaterialsNestedInput);
