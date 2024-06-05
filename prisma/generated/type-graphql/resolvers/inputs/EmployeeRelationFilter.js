"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeWhereInput_1 = require("../inputs/EmployeeWhereInput");
let EmployeeRelationFilter = class EmployeeRelationFilter {
};
exports.EmployeeRelationFilter = EmployeeRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], EmployeeRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], EmployeeRelationFilter.prototype, "isNot", void 0);
exports.EmployeeRelationFilter = EmployeeRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeRelationFilter", {})
], EmployeeRelationFilter);
