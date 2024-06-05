"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateOrConnectWithoutEvaluationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateWithoutEvaluationsInput");
const EmployeeWhereUniqueInput_1 = require("../inputs/EmployeeWhereUniqueInput");
let EmployeeCreateOrConnectWithoutEvaluationsInput = class EmployeeCreateOrConnectWithoutEvaluationsInput {
};
exports.EmployeeCreateOrConnectWithoutEvaluationsInput = EmployeeCreateOrConnectWithoutEvaluationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], EmployeeCreateOrConnectWithoutEvaluationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput)
], EmployeeCreateOrConnectWithoutEvaluationsInput.prototype, "create", void 0);
exports.EmployeeCreateOrConnectWithoutEvaluationsInput = EmployeeCreateOrConnectWithoutEvaluationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeCreateOrConnectWithoutEvaluationsInput", {})
], EmployeeCreateOrConnectWithoutEvaluationsInput);
