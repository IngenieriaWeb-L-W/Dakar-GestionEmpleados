"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
let UserRoleArgs = class UserRoleArgs {
};
exports.UserRoleArgs = UserRoleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], UserRoleArgs.prototype, "where", void 0);
exports.UserRoleArgs = UserRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserRoleArgs);
