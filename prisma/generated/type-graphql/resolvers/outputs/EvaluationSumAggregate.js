"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EvaluationSumAggregate = class EvaluationSumAggregate {
};
exports.EvaluationSumAggregate = EvaluationSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EvaluationSumAggregate.prototype, "performance", void 0);
exports.EvaluationSumAggregate = EvaluationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EvaluationSumAggregate", {})
], EvaluationSumAggregate);
