"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
let DeleteOneEmployeeArgs = class DeleteOneEmployeeArgs {
};
exports.DeleteOneEmployeeArgs = DeleteOneEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], DeleteOneEmployeeArgs.prototype, "where", void 0);
exports.DeleteOneEmployeeArgs = DeleteOneEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneEmployeeArgs);
