"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const InventoryMovementListRelationFilter_1 = require("../inputs/InventoryMovementListRelationFilter");
const MaterialListRelationFilter_1 = require("../inputs/MaterialListRelationFilter");
const RoleNullableRelationFilter_1 = require("../inputs/RoleNullableRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
exports.UserWhereUniqueInput = UserWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereUniqueInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "roleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleNullableRelationFilter_1.RoleNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleNullableRelationFilter_1.RoleNullableRelationFilter)
], UserWhereUniqueInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereUniqueInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereUniqueInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialListRelationFilter_1.MaterialListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialListRelationFilter_1.MaterialListRelationFilter)
], UserWhereUniqueInput.prototype, "materials", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter)
], UserWhereUniqueInput.prototype, "movements", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
