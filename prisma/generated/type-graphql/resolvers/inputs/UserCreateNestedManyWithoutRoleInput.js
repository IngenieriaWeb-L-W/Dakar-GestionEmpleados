"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyRoleInputEnvelope_1 = require("../inputs/UserCreateManyRoleInputEnvelope");
const UserCreateOrConnectWithoutRoleInput_1 = require("../inputs/UserCreateOrConnectWithoutRoleInput");
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutRoleInput = class UserCreateNestedManyWithoutRoleInput {
};
exports.UserCreateNestedManyWithoutRoleInput = UserCreateNestedManyWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutRoleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoleInput_1.UserCreateOrConnectWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutRoleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope)
], UserCreateNestedManyWithoutRoleInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutRoleInput.prototype, "connect", void 0);
exports.UserCreateNestedManyWithoutRoleInput = UserCreateNestedManyWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutRoleInput", {})
], UserCreateNestedManyWithoutRoleInput);
