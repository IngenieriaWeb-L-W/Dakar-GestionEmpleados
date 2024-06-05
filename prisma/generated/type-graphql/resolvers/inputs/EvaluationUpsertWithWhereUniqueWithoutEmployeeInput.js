"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateWithoutEmployeeInput");
const EvaluationUpdateWithoutEmployeeInput_1 = require("../inputs/EvaluationUpdateWithoutEmployeeInput");
const EvaluationWhereUniqueInput_1 = require("../inputs/EvaluationWhereUniqueInput");
let EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = class EvaluationUpsertWithWhereUniqueWithoutEmployeeInput {
};
exports.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = EvaluationUpsertWithWhereUniqueWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput)
], EvaluationUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateWithoutEmployeeInput_1.EvaluationUpdateWithoutEmployeeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateWithoutEmployeeInput_1.EvaluationUpdateWithoutEmployeeInput)
], EvaluationUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput)
], EvaluationUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "create", void 0);
exports.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationUpsertWithWhereUniqueWithoutEmployeeInput", {})
], EvaluationUpsertWithWhereUniqueWithoutEmployeeInput);
