"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmployee = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeAvgAggregate_1 = require("../outputs/EmployeeAvgAggregate");
const EmployeeCountAggregate_1 = require("../outputs/EmployeeCountAggregate");
const EmployeeMaxAggregate_1 = require("../outputs/EmployeeMaxAggregate");
const EmployeeMinAggregate_1 = require("../outputs/EmployeeMinAggregate");
const EmployeeSumAggregate_1 = require("../outputs/EmployeeSumAggregate");
let AggregateEmployee = class AggregateEmployee {
};
exports.AggregateEmployee = AggregateEmployee;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCountAggregate_1.EmployeeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCountAggregate_1.EmployeeCountAggregate)
], AggregateEmployee.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeAvgAggregate_1.EmployeeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeAvgAggregate_1.EmployeeAvgAggregate)
], AggregateEmployee.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeSumAggregate_1.EmployeeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeSumAggregate_1.EmployeeSumAggregate)
], AggregateEmployee.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMinAggregate_1.EmployeeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMinAggregate_1.EmployeeMinAggregate)
], AggregateEmployee.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMaxAggregate_1.EmployeeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMaxAggregate_1.EmployeeMaxAggregate)
], AggregateEmployee.prototype, "_max", void 0);
exports.AggregateEmployee = AggregateEmployee = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEmployee", {})
], AggregateEmployee);
