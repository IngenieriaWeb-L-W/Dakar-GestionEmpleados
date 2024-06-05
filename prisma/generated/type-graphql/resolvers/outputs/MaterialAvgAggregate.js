"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MaterialAvgAggregate = class MaterialAvgAggregate {
};
exports.MaterialAvgAggregate = MaterialAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialAvgAggregate.prototype, "quantity", void 0);
exports.MaterialAvgAggregate = MaterialAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MaterialAvgAggregate", {})
], MaterialAvgAggregate);
