"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateInput_1 = require("../../../inputs/EmployeeCreateInput");
const EmployeeUpdateInput_1 = require("../../../inputs/EmployeeUpdateInput");
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
let UpsertOneEmployeeArgs = class UpsertOneEmployeeArgs {
};
exports.UpsertOneEmployeeArgs = UpsertOneEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], UpsertOneEmployeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateInput_1.EmployeeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeCreateInput_1.EmployeeCreateInput)
], UpsertOneEmployeeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateInput_1.EmployeeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateInput_1.EmployeeUpdateInput)
], UpsertOneEmployeeArgs.prototype, "update", void 0);
exports.UpsertOneEmployeeArgs = UpsertOneEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEmployeeArgs);
