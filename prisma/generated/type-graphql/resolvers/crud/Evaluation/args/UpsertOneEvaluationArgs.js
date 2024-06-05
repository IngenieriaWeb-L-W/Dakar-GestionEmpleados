"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateInput_1 = require("../../../inputs/EvaluationCreateInput");
const EvaluationUpdateInput_1 = require("../../../inputs/EvaluationUpdateInput");
const EvaluationWhereUniqueInput_1 = require("../../../inputs/EvaluationWhereUniqueInput");
let UpsertOneEvaluationArgs = class UpsertOneEvaluationArgs {
};
exports.UpsertOneEvaluationArgs = UpsertOneEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], UpsertOneEvaluationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateInput_1.EvaluationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationCreateInput_1.EvaluationCreateInput)
], UpsertOneEvaluationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateInput_1.EvaluationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateInput_1.EvaluationUpdateInput)
], UpsertOneEvaluationArgs.prototype, "update", void 0);
exports.UpsertOneEvaluationArgs = UpsertOneEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEvaluationArgs);
