"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let FindUniqueEvaluationArgs = class FindUniqueEvaluationArgs {
};
exports.FindUniqueEvaluationArgs = FindUniqueEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], FindUniqueEvaluationArgs.prototype, "where", void 0);
exports.FindUniqueEvaluationArgs = FindUniqueEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEvaluationArgs);
