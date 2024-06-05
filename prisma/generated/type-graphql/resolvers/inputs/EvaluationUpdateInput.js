"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput_1 = require("../inputs/EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let EvaluationUpdateInput = class EvaluationUpdateInput {
};
exports.EvaluationUpdateInput = EvaluationUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EvaluationUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], EvaluationUpdateInput.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EvaluationUpdateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EvaluationUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EvaluationUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput_1.EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput_1.EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput)
], EvaluationUpdateInput.prototype, "employee", void 0);
exports.EvaluationUpdateInput = EvaluationUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationUpdateInput", {})
], EvaluationUpdateInput);
