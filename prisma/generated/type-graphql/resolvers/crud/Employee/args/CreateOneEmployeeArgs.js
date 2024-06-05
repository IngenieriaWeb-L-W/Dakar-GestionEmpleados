"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateInput_1 = require("../../../inputs/EmployeeCreateInput");
let CreateOneEmployeeArgs = class CreateOneEmployeeArgs {
};
exports.CreateOneEmployeeArgs = CreateOneEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCreateInput_1.EmployeeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmployeeCreateInput_1.EmployeeCreateInput)
], CreateOneEmployeeArgs.prototype, "data", void 0);
exports.CreateOneEmployeeArgs = CreateOneEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEmployeeArgs);
