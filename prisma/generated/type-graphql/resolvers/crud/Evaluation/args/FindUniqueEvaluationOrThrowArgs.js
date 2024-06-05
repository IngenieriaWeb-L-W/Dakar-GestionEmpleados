"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEvaluationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let FindUniqueEvaluationOrThrowArgs = class FindUniqueEvaluationOrThrowArgs {
};
exports.FindUniqueEvaluationOrThrowArgs = FindUniqueEvaluationOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], FindUniqueEvaluationOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueEvaluationOrThrowArgs = FindUniqueEvaluationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEvaluationOrThrowArgs);
