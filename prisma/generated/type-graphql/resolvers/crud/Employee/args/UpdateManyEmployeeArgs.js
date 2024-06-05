"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeUpdateManyMutationInput_1 = require("../../../inputs/EmployeeUpdateManyMutationInput");
const EmployeeWhereInput_1 = require("../../../inputs/EmployeeWhereInput");
let UpdateManyEmployeeArgs = class UpdateManyEmployeeArgs {
};
exports.UpdateManyEmployeeArgs = UpdateManyEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateManyMutationInput_1.EmployeeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateManyMutationInput_1.EmployeeUpdateManyMutationInput)
], UpdateManyEmployeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], UpdateManyEmployeeArgs.prototype, "where", void 0);
exports.UpdateManyEmployeeArgs = UpdateManyEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEmployeeArgs);
