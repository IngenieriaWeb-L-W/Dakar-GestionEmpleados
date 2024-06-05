"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMaterial = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialAvgAggregate_1 = require("../outputs/MaterialAvgAggregate");
const MaterialCountAggregate_1 = require("../outputs/MaterialCountAggregate");
const MaterialMaxAggregate_1 = require("../outputs/MaterialMaxAggregate");
const MaterialMinAggregate_1 = require("../outputs/MaterialMinAggregate");
const MaterialSumAggregate_1 = require("../outputs/MaterialSumAggregate");
let AggregateMaterial = class AggregateMaterial {
};
exports.AggregateMaterial = AggregateMaterial;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCountAggregate_1.MaterialCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCountAggregate_1.MaterialCountAggregate)
], AggregateMaterial.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialAvgAggregate_1.MaterialAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialAvgAggregate_1.MaterialAvgAggregate)
], AggregateMaterial.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialSumAggregate_1.MaterialSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialSumAggregate_1.MaterialSumAggregate)
], AggregateMaterial.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMinAggregate_1.MaterialMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMinAggregate_1.MaterialMinAggregate)
], AggregateMaterial.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialMaxAggregate_1.MaterialMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialMaxAggregate_1.MaterialMaxAggregate)
], AggregateMaterial.prototype, "_max", void 0);
exports.AggregateMaterial = AggregateMaterial = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMaterial", {})
], AggregateMaterial);
