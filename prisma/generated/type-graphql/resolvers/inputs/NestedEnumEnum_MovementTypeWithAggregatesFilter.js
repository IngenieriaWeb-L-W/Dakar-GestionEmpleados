"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_MovementTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_MovementTypeFilter_1 = require("../inputs/NestedEnumEnum_MovementTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let NestedEnumEnum_MovementTypeWithAggregatesFilter = class NestedEnumEnum_MovementTypeWithAggregatesFilter {
};
exports.NestedEnumEnum_MovementTypeWithAggregatesFilter = NestedEnumEnum_MovementTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_MovementTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_MovementTypeWithAggregatesFilter)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_MovementTypeFilter_1.NestedEnumEnum_MovementTypeFilter)
], NestedEnumEnum_MovementTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumEnum_MovementTypeWithAggregatesFilter = NestedEnumEnum_MovementTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_MovementTypeWithAggregatesFilter", {})
], NestedEnumEnum_MovementTypeWithAggregatesFilter);
