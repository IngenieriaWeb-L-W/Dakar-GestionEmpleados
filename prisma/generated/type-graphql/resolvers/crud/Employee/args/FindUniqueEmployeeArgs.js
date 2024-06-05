"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
let FindUniqueEmployeeArgs = class FindUniqueEmployeeArgs {
};
exports.FindUniqueEmployeeArgs = FindUniqueEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], FindUniqueEmployeeArgs.prototype, "where", void 0);
exports.FindUniqueEmployeeArgs = FindUniqueEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmployeeArgs);
