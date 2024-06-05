"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpdateToOneWithWhereWithoutEvaluationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeUpdateWithoutEvaluationsInput_1 = require("../inputs/EmployeeUpdateWithoutEvaluationsInput");
const EmployeeWhereInput_1 = require("../inputs/EmployeeWhereInput");
let EmployeeUpdateToOneWithWhereWithoutEvaluationsInput = class EmployeeUpdateToOneWithWhereWithoutEvaluationsInput {
};
exports.EmployeeUpdateToOneWithWhereWithoutEvaluationsInput = EmployeeUpdateToOneWithWhereWithoutEvaluationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], EmployeeUpdateToOneWithWhereWithoutEvaluationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateWithoutEvaluationsInput_1.EmployeeUpdateWithoutEvaluationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateWithoutEvaluationsInput_1.EmployeeUpdateWithoutEvaluationsInput)
], EmployeeUpdateToOneWithWhereWithoutEvaluationsInput.prototype, "data", void 0);
exports.EmployeeUpdateToOneWithWhereWithoutEvaluationsInput = EmployeeUpdateToOneWithWhereWithoutEvaluationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeUpdateToOneWithWhereWithoutEvaluationsInput", {})
], EmployeeUpdateToOneWithWhereWithoutEvaluationsInput);
