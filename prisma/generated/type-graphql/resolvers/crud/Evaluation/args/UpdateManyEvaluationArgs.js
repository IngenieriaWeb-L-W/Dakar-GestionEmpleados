"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationUpdateManyMutationInput_1 = require("../../../inputs/EvaluationUpdateManyMutationInput");
const EvaluationWhereInput_1 = require("../../../inputs/EvaluationWhereInput");
let UpdateManyEvaluationArgs = class UpdateManyEvaluationArgs {
};
exports.UpdateManyEvaluationArgs = UpdateManyEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateManyMutationInput_1.EvaluationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateManyMutationInput_1.EvaluationUpdateManyMutationInput)
], UpdateManyEvaluationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], UpdateManyEvaluationArgs.prototype, "where", void 0);
exports.UpdateManyEvaluationArgs = UpdateManyEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEvaluationArgs);
