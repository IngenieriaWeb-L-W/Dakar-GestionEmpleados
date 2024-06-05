"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationUpdateWithoutEmployeeInput_1 = require("../inputs/EvaluationUpdateWithoutEmployeeInput");
const EvaluationWhereUniqueInput_1 = require("../inputs/EvaluationWhereUniqueInput");
let EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = class EvaluationUpdateWithWhereUniqueWithoutEmployeeInput {
};
exports.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = EvaluationUpdateWithWhereUniqueWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], EvaluationUpdateWithWhereUniqueWithoutEmployeeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateWithoutEmployeeInput_1.EvaluationUpdateWithoutEmployeeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateWithoutEmployeeInput_1.EvaluationUpdateWithoutEmployeeInput)
], EvaluationUpdateWithWhereUniqueWithoutEmployeeInput.prototype, "data", void 0);
exports.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationUpdateWithWhereUniqueWithoutEmployeeInput", {})
], EvaluationUpdateWithWhereUniqueWithoutEmployeeInput);
