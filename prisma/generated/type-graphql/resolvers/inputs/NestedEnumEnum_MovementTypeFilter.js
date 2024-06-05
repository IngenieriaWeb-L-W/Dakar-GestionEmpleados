"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_MovementTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let NestedEnumEnum_MovementTypeFilter = class NestedEnumEnum_MovementTypeFilter {
};
exports.NestedEnumEnum_MovementTypeFilter = NestedEnumEnum_MovementTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_MovementTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_MovementTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_MovementType_1.Enum_MovementType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_MovementTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_MovementTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_MovementTypeFilter)
], NestedEnumEnum_MovementTypeFilter.prototype, "not", void 0);
exports.NestedEnumEnum_MovementTypeFilter = NestedEnumEnum_MovementTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_MovementTypeFilter", {})
], NestedEnumEnum_MovementTypeFilter);
