"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RoleNameFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RoleNameFilter_1 = require("../inputs/NestedEnumEnum_RoleNameFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let EnumEnum_RoleNameFilter = class EnumEnum_RoleNameFilter {
};
exports.EnumEnum_RoleNameFilter = EnumEnum_RoleNameFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RoleNameFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter)
], EnumEnum_RoleNameFilter.prototype, "not", void 0);
exports.EnumEnum_RoleNameFilter = EnumEnum_RoleNameFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RoleNameFilter", {})
], EnumEnum_RoleNameFilter);
