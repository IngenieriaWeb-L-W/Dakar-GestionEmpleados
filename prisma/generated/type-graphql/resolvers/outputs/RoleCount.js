"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCountUsersArgs_1 = require("./args/RoleCountUsersArgs");
let RoleCount = class RoleCount {
    getUsers(root, args) {
        return root.users;
    }
};
exports.RoleCount = RoleCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "users",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RoleCount, RoleCountUsersArgs_1.RoleCountUsersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], RoleCount.prototype, "getUsers", null);
exports.RoleCount = RoleCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleCount", {})
], RoleCount);
