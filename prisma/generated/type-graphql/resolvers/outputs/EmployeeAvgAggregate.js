"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmployeeAvgAggregate = class EmployeeAvgAggregate {
};
exports.EmployeeAvgAggregate = EmployeeAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeAvgAggregate.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeAvgAggregate.prototype, "hoursWorked", void 0);
exports.EmployeeAvgAggregate = EmployeeAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmployeeAvgAggregate", {})
], EmployeeAvgAggregate);
