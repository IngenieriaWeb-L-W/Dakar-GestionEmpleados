"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeAvgAggregate_1 = require("../outputs/EmployeeAvgAggregate");
const EmployeeCountAggregate_1 = require("../outputs/EmployeeCountAggregate");
const EmployeeMaxAggregate_1 = require("../outputs/EmployeeMaxAggregate");
const EmployeeMinAggregate_1 = require("../outputs/EmployeeMinAggregate");
const EmployeeSumAggregate_1 = require("../outputs/EmployeeSumAggregate");
let EmployeeGroupBy = class EmployeeGroupBy {
};
exports.EmployeeGroupBy = EmployeeGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeGroupBy.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeGroupBy.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeGroupBy.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeGroupBy.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmployeeGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCountAggregate_1.EmployeeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCountAggregate_1.EmployeeCountAggregate)
], EmployeeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeAvgAggregate_1.EmployeeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeAvgAggregate_1.EmployeeAvgAggregate)
], EmployeeGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeSumAggregate_1.EmployeeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeSumAggregate_1.EmployeeSumAggregate)
], EmployeeGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMinAggregate_1.EmployeeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMinAggregate_1.EmployeeMinAggregate)
], EmployeeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMaxAggregate_1.EmployeeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMaxAggregate_1.EmployeeMaxAggregate)
], EmployeeGroupBy.prototype, "_max", void 0);
exports.EmployeeGroupBy = EmployeeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmployeeGroupBy", {})
], EmployeeGroupBy);
