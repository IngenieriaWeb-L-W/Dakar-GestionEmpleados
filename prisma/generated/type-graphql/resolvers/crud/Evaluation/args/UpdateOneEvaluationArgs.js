"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationUpdateInput_1 = require("../../../inputs/EvaluationUpdateInput");
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let UpdateOneEvaluationArgs = class UpdateOneEvaluationArgs {
};
exports.UpdateOneEvaluationArgs = UpdateOneEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateInput_1.EvaluationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateInput_1.EvaluationUpdateInput)
], UpdateOneEvaluationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], UpdateOneEvaluationArgs.prototype, "where", void 0);
exports.UpdateOneEvaluationArgs = UpdateOneEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEvaluationArgs);
