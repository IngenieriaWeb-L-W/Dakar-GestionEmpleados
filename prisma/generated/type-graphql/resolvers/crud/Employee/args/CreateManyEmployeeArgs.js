"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCreateManyInput_1 = require("../../../inputs/EmployeeCreateManyInput");
let CreateManyEmployeeArgs = class CreateManyEmployeeArgs {
};
exports.CreateManyEmployeeArgs = CreateManyEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeCreateManyInput_1.EmployeeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEmployeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEmployeeArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyEmployeeArgs = CreateManyEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEmployeeArgs);
