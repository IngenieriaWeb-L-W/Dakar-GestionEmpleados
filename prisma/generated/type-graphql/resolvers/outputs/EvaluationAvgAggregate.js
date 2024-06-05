"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationAvgAggregate = class EvaluationAvgAggregate {
};
exports.EvaluationAvgAggregate = EvaluationAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationAvgAggregate.prototype, "performance", void 0);
exports.EvaluationAvgAggregate = EvaluationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EvaluationAvgAggregate", {})
], EvaluationAvgAggregate);
