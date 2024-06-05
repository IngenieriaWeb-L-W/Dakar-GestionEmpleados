"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_RoleNameFilter_1 = require("../inputs/EnumEnum_RoleNameFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let RoleWhereInput = class RoleWhereInput {
};
exports.RoleWhereInput = RoleWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RoleNameFilter_1.EnumEnum_RoleNameFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RoleNameFilter_1.EnumEnum_RoleNameFilter)
], RoleWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RoleWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RoleWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RoleWhereInput.prototype, "users", void 0);
exports.RoleWhereInput = RoleWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereInput", {})
], RoleWhereInput);
