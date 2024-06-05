"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationUpdateManyWithWhereWithoutEmployeeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationScalarWhereInput_1 = require("../inputs/EvaluationScalarWhereInput");
const EvaluationUpdateManyMutationInput_1 = require("../inputs/EvaluationUpdateManyMutationInput");
let EvaluationUpdateManyWithWhereWithoutEmployeeInput = class EvaluationUpdateManyWithWhereWithoutEmployeeInput {
};
exports.EvaluationUpdateManyWithWhereWithoutEmployeeInput = EvaluationUpdateManyWithWhereWithoutEmployeeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationScalarWhereInput_1.EvaluationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationScalarWhereInput_1.EvaluationScalarWhereInput)
], EvaluationUpdateManyWithWhereWithoutEmployeeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationUpdateManyMutationInput_1.EvaluationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EvaluationUpdateManyMutationInput_1.EvaluationUpdateManyMutationInput)
], EvaluationUpdateManyWithWhereWithoutEmployeeInput.prototype, "data", void 0);
exports.EvaluationUpdateManyWithWhereWithoutEmployeeInput = EvaluationUpdateManyWithWhereWithoutEmployeeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationUpdateManyWithWhereWithoutEmployeeInput", {})
], EvaluationUpdateManyWithWhereWithoutEmployeeInput);
