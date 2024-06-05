"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutUsersInput_1 = require("../inputs/RoleCreateOrConnectWithoutUsersInput");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleCreateNestedOneWithoutUsersInput = class RoleCreateNestedOneWithoutUsersInput {
};
exports.RoleCreateNestedOneWithoutUsersInput = RoleCreateNestedOneWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput)
], RoleCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
exports.RoleCreateNestedOneWithoutUsersInput = RoleCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateNestedOneWithoutUsersInput", {})
], RoleCreateNestedOneWithoutUsersInput);
