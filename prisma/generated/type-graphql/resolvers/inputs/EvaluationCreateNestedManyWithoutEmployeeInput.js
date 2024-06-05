"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateNestedManyWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateManyEmployeeInputEnvelope_1 = require("../inputs/EvaluationCreateManyEmployeeInputEnvelope");
const EvaluationCreateOrConnectWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateOrConnectWithoutEmployeeInput");
const EvaluationCreateWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateWithoutEmployeeInput");
const EvaluationWhereUniqueInput_1 = require("../inputs/EvaluationWhereUniqueInput");
let EvaluationCreateNestedManyWithoutEmployeeInput = class EvaluationCreateNestedManyWithoutEmployeeInput {
};
exports.EvaluationCreateNestedManyWithoutEmployeeInput = EvaluationCreateNestedManyWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationCreateNestedManyWithoutEmployeeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateOrConnectWithoutEmployeeInput_1.EvaluationCreateOrConnectWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationCreateNestedManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateManyEmployeeInputEnvelope_1.EvaluationCreateManyEmployeeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationCreateManyEmployeeInputEnvelope_1.EvaluationCreateManyEmployeeInputEnvelope)
], EvaluationCreateNestedManyWithoutEmployeeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationCreateNestedManyWithoutEmployeeInput.prototype, "connect", void 0);
exports.EvaluationCreateNestedManyWithoutEmployeeInput = EvaluationCreateNestedManyWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateNestedManyWithoutEmployeeInput", {})
], EvaluationCreateNestedManyWithoutEmployeeInput);
