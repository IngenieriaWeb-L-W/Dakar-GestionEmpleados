"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RoleNameFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let NestedEnumEnum_RoleNameFilter = class NestedEnumEnum_RoleNameFilter {
};
exports.NestedEnumEnum_RoleNameFilter = NestedEnumEnum_RoleNameFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RoleNameFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameFilter)
], NestedEnumEnum_RoleNameFilter.prototype, "not", void 0);
exports.NestedEnumEnum_RoleNameFilter = NestedEnumEnum_RoleNameFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RoleNameFilter", {})
], NestedEnumEnum_RoleNameFilter);
