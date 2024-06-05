"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialAvgAggregate_1 = require("../outputs/MaterialAvgAggregate");
const MaterialCountAggregate_1 = require("../outputs/MaterialCountAggregate");
const MaterialMaxAggregate_1 = require("../outputs/MaterialMaxAggregate");
const MaterialMinAggregate_1 = require("../outputs/MaterialMinAggregate");
const MaterialSumAggregate_1 = require("../outputs/MaterialSumAggregate");
let MaterialGroupBy = class MaterialGroupBy {
};
exports.MaterialGroupBy = MaterialGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialGroupBy.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCountAggregate_1.MaterialCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCountAggregate_1.MaterialCountAggregate)
], MaterialGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialAvgAggregate_1.MaterialAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialAvgAggregate_1.MaterialAvgAggregate)
], MaterialGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialSumAggregate_1.MaterialSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialSumAggregate_1.MaterialSumAggregate)
], MaterialGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMinAggregate_1.MaterialMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMinAggregate_1.MaterialMinAggregate)
], MaterialGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMaxAggregate_1.MaterialMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMaxAggregate_1.MaterialMaxAggregate)
], MaterialGroupBy.prototype, "_max", void 0);
exports.MaterialGroupBy = MaterialGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MaterialGroupBy", {})
], MaterialGroupBy);
