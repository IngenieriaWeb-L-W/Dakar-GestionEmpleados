"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpsertWithoutEvaluationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateWithoutEvaluationsInput");
const EmployeeUpdateWithoutEvaluationsInput_1 = require("../inputs/EmployeeUpdateWithoutEvaluationsInput");
const EmployeeWhereInput_1 = require("../inputs/EmployeeWhereInput");
let EmployeeUpsertWithoutEvaluationsInput = class EmployeeUpsertWithoutEvaluationsInput {
};
exports.EmployeeUpsertWithoutEvaluationsInput = EmployeeUpsertWithoutEvaluationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateWithoutEvaluationsInput_1.EmployeeUpdateWithoutEvaluationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateWithoutEvaluationsInput_1.EmployeeUpdateWithoutEvaluationsInput)
], EmployeeUpsertWithoutEvaluationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput)
], EmployeeUpsertWithoutEvaluationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], EmployeeUpsertWithoutEvaluationsInput.prototype, "where", void 0);
exports.EmployeeUpsertWithoutEvaluationsInput = EmployeeUpsertWithoutEvaluationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeUpsertWithoutEvaluationsInput", {})
], EmployeeUpsertWithoutEvaluationsInput);
