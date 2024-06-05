"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCountUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../../inputs/UserWhereInput");
let RoleCountUsersArgs = class RoleCountUsersArgs {
};
exports.RoleCountUsersArgs = RoleCountUsersArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], RoleCountUsersArgs.prototype, "where", void 0);
exports.RoleCountUsersArgs = RoleCountUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], RoleCountUsersArgs);
