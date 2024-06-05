"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let DeleteOneEvaluationArgs = class DeleteOneEvaluationArgs {
};
exports.DeleteOneEvaluationArgs = DeleteOneEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], DeleteOneEvaluationArgs.prototype, "where", void 0);
exports.DeleteOneEvaluationArgs = DeleteOneEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneEvaluationArgs);
