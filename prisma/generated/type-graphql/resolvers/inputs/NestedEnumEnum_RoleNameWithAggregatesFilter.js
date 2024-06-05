"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RoleNameWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RoleNameFilter_1 = require("../inputs/NestedEnumEnum_RoleNameFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let NestedEnumEnum_RoleNameWithAggregatesFilter = class NestedEnumEnum_RoleNameWithAggregatesFilter {
};
exports.NestedEnumEnum_RoleNameWithAggregatesFilter = NestedEnumEnum_RoleNameWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameWithAggregatesFilter)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameFilter_1.NestedEnumEnum_RoleNameFilter)
], NestedEnumEnum_RoleNameWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumEnum_RoleNameWithAggregatesFilter = NestedEnumEnum_RoleNameWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RoleNameWithAggregatesFilter", {})
], NestedEnumEnum_RoleNameWithAggregatesFilter);
