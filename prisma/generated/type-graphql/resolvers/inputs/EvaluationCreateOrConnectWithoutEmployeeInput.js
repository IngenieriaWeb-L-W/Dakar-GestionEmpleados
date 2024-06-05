"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateOrConnectWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateWithoutEmployeeInput");
const EvaluationWhereUniqueInput_1 = require("../inputs/EvaluationWhereUniqueInput");
let EvaluationCreateOrConnectWithoutEmployeeInput = class EvaluationCreateOrConnectWithoutEmployeeInput {
};
exports.EvaluationCreateOrConnectWithoutEmployeeInput = EvaluationCreateOrConnectWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], EvaluationCreateOrConnectWithoutEmployeeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput)
], EvaluationCreateOrConnectWithoutEmployeeInput.prototype, "create", void 0);
exports.EvaluationCreateOrConnectWithoutEmployeeInput = EvaluationCreateOrConnectWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateOrConnectWithoutEmployeeInput", {})
], EvaluationCreateOrConnectWithoutEmployeeInput);
