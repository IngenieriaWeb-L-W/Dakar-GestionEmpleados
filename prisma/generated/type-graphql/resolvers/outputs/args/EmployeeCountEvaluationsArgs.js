"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCountEvaluationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereInput_1 = require("../../inputs/EvaluationWhereInput");
let EmployeeCountEvaluationsArgs = class EmployeeCountEvaluationsArgs {
};
exports.EmployeeCountEvaluationsArgs = EmployeeCountEvaluationsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], EmployeeCountEvaluationsArgs.prototype, "where", void 0);
exports.EmployeeCountEvaluationsArgs = EmployeeCountEvaluationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], EmployeeCountEvaluationsArgs);
