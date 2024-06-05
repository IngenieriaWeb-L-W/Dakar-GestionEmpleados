"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleWhereUniqueInput = class RoleWhereUniqueInput {
};
exports.RoleWhereUniqueInput = RoleWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RoleWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RoleWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RoleWhereUniqueInput.prototype, "users", void 0);
exports.RoleWhereUniqueInput = RoleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereUniqueInput", {})
], RoleWhereUniqueInput);
