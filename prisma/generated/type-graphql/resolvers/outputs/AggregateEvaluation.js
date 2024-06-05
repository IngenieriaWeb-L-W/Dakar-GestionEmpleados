"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEvaluation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationAvgAggregate_1 = require("../outputs/EvaluationAvgAggregate");
const EvaluationCountAggregate_1 = require("../outputs/EvaluationCountAggregate");
const EvaluationMaxAggregate_1 = require("../outputs/EvaluationMaxAggregate");
const EvaluationMinAggregate_1 = require("../outputs/EvaluationMinAggregate");
const EvaluationSumAggregate_1 = require("../outputs/EvaluationSumAggregate");
let AggregateEvaluation = class AggregateEvaluation {
};
exports.AggregateEvaluation = AggregateEvaluation;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCountAggregate_1.EvaluationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationCountAggregate_1.EvaluationCountAggregate)
], AggregateEvaluation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationAvgAggregate_1.EvaluationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationAvgAggregate_1.EvaluationAvgAggregate)
], AggregateEvaluation.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationSumAggregate_1.EvaluationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationSumAggregate_1.EvaluationSumAggregate)
], AggregateEvaluation.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationMinAggregate_1.EvaluationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationMinAggregate_1.EvaluationMinAggregate)
], AggregateEvaluation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationMaxAggregate_1.EvaluationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationMaxAggregate_1.EvaluationMaxAggregate)
], AggregateEvaluation.prototype, "_max", void 0);
exports.AggregateEvaluation = AggregateEvaluation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEvaluation", {})
], AggregateEvaluation);
