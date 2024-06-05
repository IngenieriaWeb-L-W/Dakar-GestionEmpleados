"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_MovementTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_MovementTypeFilter_1 = require("../inputs/NestedEnumEnum_MovementTypeFilter");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let EnumEnum_MovementTypeFilter = class EnumEnum_MovementTypeFilter {
};
exports.EnumEnum_MovementTypeFilter = EnumEnum_MovementTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_MovementTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_MovementTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_MovementTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter)
], EnumEnum_MovementTypeFilter.prototype, "not", void 0);
exports.EnumEnum_MovementTypeFilter = EnumEnum_MovementTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_MovementTypeFilter", {})
], EnumEnum_MovementTypeFilter);
