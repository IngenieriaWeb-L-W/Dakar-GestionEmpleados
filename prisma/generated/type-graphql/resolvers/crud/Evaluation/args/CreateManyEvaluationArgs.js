"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEvaluationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateManyInput_1 = require("../../../inputs/EvaluationCreateManyInput");
let CreateManyEvaluationArgs = class CreateManyEvaluationArgs {
};
exports.CreateManyEvaluationArgs = CreateManyEvaluationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateManyInput_1.EvaluationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEvaluationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEvaluationArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyEvaluationArgs = CreateManyEvaluationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEvaluationArgs);
