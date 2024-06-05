"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereInput_1 = require("../../../inputs/EvaluationWhereInput");
let DeleteManyEvaluationArgs = class DeleteManyEvaluationArgs {
};
exports.DeleteManyEvaluationArgs = DeleteManyEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], DeleteManyEvaluationArgs.prototype, "where", void 0);
exports.DeleteManyEvaluationArgs = DeleteManyEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEvaluationArgs);
