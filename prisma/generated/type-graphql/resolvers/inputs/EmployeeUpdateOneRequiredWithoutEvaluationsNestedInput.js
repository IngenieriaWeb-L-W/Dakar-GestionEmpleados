"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateOrConnectWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateOrConnectWithoutEvaluationsInput");
const EmployeeCreateWithoutEvaluationsInput_1 = require("../inputs/EmployeeCreateWithoutEvaluationsInput");
const EmployeeUpdateToOneWithWhereWithoutEvaluationsInput_1 = require("../inputs/EmployeeUpdateToOneWithWhereWithoutEvaluationsInput");
const EmployeeUpsertWithoutEvaluationsInput_1 = require("../inputs/EmployeeUpsertWithoutEvaluationsInput");
const EmployeeWhereUniqueInput_1 = require("../inputs/EmployeeWhereUniqueInput");
let EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput = class EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput {
};
exports.EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput = EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCreateWithoutEvaluationsInput_1.EmployeeCreateWithoutEvaluationsInput)
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateOrConnectWithoutEvaluationsInput_1.EmployeeCreateOrConnectWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCreateOrConnectWithoutEvaluationsInput_1.EmployeeCreateOrConnectWithoutEvaluationsInput)
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpsertWithoutEvaluationsInput_1.EmployeeUpsertWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeUpsertWithoutEvaluationsInput_1.EmployeeUpsertWithoutEvaluationsInput)
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateToOneWithWhereWithoutEvaluationsInput_1.EmployeeUpdateToOneWithWhereWithoutEvaluationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateToOneWithWhereWithoutEvaluationsInput_1.EmployeeUpdateToOneWithWhereWithoutEvaluationsInput)
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput.prototype, "update", void 0);
exports.EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput = EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput", {})
], EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput);
