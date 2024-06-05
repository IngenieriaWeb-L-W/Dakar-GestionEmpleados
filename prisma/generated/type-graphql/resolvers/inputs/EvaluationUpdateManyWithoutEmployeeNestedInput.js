"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationUpdateManyWithoutEmployeeNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateManyEmployeeInputEnvelope_1 = require("../inputs/EvaluationCreateManyEmployeeInputEnvelope");
const EvaluationCreateOrConnectWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateOrConnectWithoutEmployeeInput");
const EvaluationCreateWithoutEmployeeInput_1 = require("../inputs/EvaluationCreateWithoutEmployeeInput");
const EvaluationScalarWhereInput_1 = require("../inputs/EvaluationScalarWhereInput");
const EvaluationUpdateManyWithWhereWithoutEmployeeInput_1 = require("../inputs/EvaluationUpdateManyWithWhereWithoutEmployeeInput");
const EvaluationUpdateWithWhereUniqueWithoutEmployeeInput_1 = require("../inputs/EvaluationUpdateWithWhereUniqueWithoutEmployeeInput");
const EvaluationUpsertWithWhereUniqueWithoutEmployeeInput_1 = require("../inputs/EvaluationUpsertWithWhereUniqueWithoutEmployeeInput");
const EvaluationWhereUniqueInput_1 = require("../inputs/EvaluationWhereUniqueInput");
let EvaluationUpdateManyWithoutEmployeeNestedInput = class EvaluationUpdateManyWithoutEmployeeNestedInput {
};
exports.EvaluationUpdateManyWithoutEmployeeNestedInput = EvaluationUpdateManyWithoutEmployeeNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateWithoutEmployeeInput_1.EvaluationCreateWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateOrConnectWithoutEmployeeInput_1.EvaluationCreateOrConnectWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationUpsertWithWhereUniqueWithoutEmployeeInput_1.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationCreateManyEmployeeInputEnvelope_1.EvaluationCreateManyEmployeeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationCreateManyEmployeeInputEnvelope_1.EvaluationCreateManyEmployeeInputEnvelope)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationWhereUniqueInput_1.EvaluationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationUpdateWithWhereUniqueWithoutEmployeeInput_1.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationUpdateManyWithWhereWithoutEmployeeInput_1.EvaluationUpdateManyWithWhereWithoutEmployeeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationScalarWhereInput_1.EvaluationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationUpdateManyWithoutEmployeeNestedInput.prototype, "deleteMany", void 0);
exports.EvaluationUpdateManyWithoutEmployeeNestedInput = EvaluationUpdateManyWithoutEmployeeNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationUpdateManyWithoutEmployeeNestedInput", {})
], EvaluationUpdateManyWithoutEmployeeNestedInput);
