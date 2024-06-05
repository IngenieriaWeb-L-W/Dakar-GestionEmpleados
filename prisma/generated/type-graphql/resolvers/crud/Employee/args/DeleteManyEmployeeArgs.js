"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeWhereInput_1 = require("../../../inputs/EmployeeWhereInput");
let DeleteManyEmployeeArgs = class DeleteManyEmployeeArgs {
};
exports.DeleteManyEmployeeArgs = DeleteManyEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], DeleteManyEmployeeArgs.prototype, "where", void 0);
exports.DeleteManyEmployeeArgs = DeleteManyEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEmployeeArgs);
