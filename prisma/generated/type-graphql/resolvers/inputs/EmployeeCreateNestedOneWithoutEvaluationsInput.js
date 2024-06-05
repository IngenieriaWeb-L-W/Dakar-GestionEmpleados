"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateNestedOneWithoutEvaluationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateOrConnectWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateOrConnectWithoutEvaluationsInput");
const EmployeeCreateWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateWithoutEvaluationsInput");
const EmployeeWhereUniqueInput_1 = require("../inputs/EmployeeWhereUniqueInput");
let EmployeeCreateNestedOneWithoutEvaluationsInput = class EmployeeCreateNestedOneWithoutEvaluationsInput {
};
exports.EmployeeCreateNestedOneWithoutEvaluationsInput = EmployeeCreateNestedOneWithoutEvaluationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput)
], EmployeeCreateNestedOneWithoutEvaluationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateOrConnectWithoutEvaluationsInput_1.EmployeeCreateOrConnectWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCreateOrConnectWithoutEvaluationsInput_1.EmployeeCreateOrConnectWithoutEvaluationsInput)
], EmployeeCreateNestedOneWithoutEvaluationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], EmployeeCreateNestedOneWithoutEvaluationsInput.prototype, "connect", void 0);
exports.EmployeeCreateNestedOneWithoutEvaluationsInput = EmployeeCreateNestedOneWithoutEvaluationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeCreateNestedOneWithoutEvaluationsInput", {})
], EmployeeCreateNestedOneWithoutEvaluationsInput);
