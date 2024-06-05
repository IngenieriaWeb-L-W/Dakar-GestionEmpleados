"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutRoleNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyRoleInputEnvelope_1 = require("../inputs/UserCreateManyRoleInputEnvelope");
const UserCreateOrConnectWithoutRoleInput_1 = require("../inputs/UserCreateOrConnectWithoutRoleInput");
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutRoleInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutRoleInput");
const UserUpdateWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutRoleInput");
const UserUpsertWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutRoleNestedInput = class UserUpdateManyWithoutRoleNestedInput {
};
exports.UserUpdateManyWithoutRoleNestedInput = UserUpdateManyWithoutRoleNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoleInput_1.UserCreateOrConnectWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoleInput_1.UserUpsertWithWhereUniqueWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope)
], UserUpdateManyWithoutRoleNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput_1.UserUpdateWithWhereUniqueWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRoleInput_1.UserUpdateManyWithWhereWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleNestedInput.prototype, "deleteMany", void 0);
exports.UserUpdateManyWithoutRoleNestedInput = UserUpdateManyWithoutRoleNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutRoleNestedInput", {})
], UserUpdateManyWithoutRoleNestedInput);
