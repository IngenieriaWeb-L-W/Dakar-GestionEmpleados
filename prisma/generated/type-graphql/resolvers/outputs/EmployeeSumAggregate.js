"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmployeeSumAggregate = class EmployeeSumAggregate {
};
exports.EmployeeSumAggregate = EmployeeSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeSumAggregate.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeSumAggregate.prototype, "hoursWorked", void 0);
exports.EmployeeSumAggregate = EmployeeSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmployeeSumAggregate", {})
], EmployeeSumAggregate);
