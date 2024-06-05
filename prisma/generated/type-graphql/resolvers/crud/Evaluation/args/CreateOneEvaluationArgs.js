"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateInput_1 = require("../../../inputs/EvaluationCreateInput");
let CreateOneEvaluationArgs = class CreateOneEvaluationArgs {
};
exports.CreateOneEvaluationArgs = CreateOneEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateInput_1.EvaluationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationCreateInput_1.EvaluationCreateInput)
], CreateOneEvaluationArgs.prototype, "data", void 0);
exports.CreateOneEvaluationArgs = CreateOneEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEvaluationArgs);
