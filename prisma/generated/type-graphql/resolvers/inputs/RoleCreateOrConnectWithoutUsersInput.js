"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleCreateOrConnectWithoutUsersInput = class RoleCreateOrConnectWithoutUsersInput {
};
exports.RoleCreateOrConnectWithoutUsersInput = RoleCreateOrConnectWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
exports.RoleCreateOrConnectWithoutUsersInput = RoleCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateOrConnectWithoutUsersInput", {})
], RoleCreateOrConnectWithoutUsersInput);
