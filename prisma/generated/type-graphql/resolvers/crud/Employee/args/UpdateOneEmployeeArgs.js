"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeUpdateInput_1 = require("../../../inputs/EmployeeUpdateInput");
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
let UpdateOneEmployeeArgs = class UpdateOneEmployeeArgs {
};
exports.UpdateOneEmployeeArgs = UpdateOneEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeUpdateInput_1.EmployeeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeUpdateInput_1.EmployeeUpdateInput)
], UpdateOneEmployeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], UpdateOneEmployeeArgs.prototype, "where", void 0);
exports.UpdateOneEmployeeArgs = UpdateOneEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEmployeeArgs);
