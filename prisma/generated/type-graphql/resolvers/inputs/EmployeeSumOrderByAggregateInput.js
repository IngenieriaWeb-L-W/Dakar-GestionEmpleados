"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmployeeSumOrderByAggregateInput = class EmployeeSumOrderByAggregateInput {
};
exports.EmployeeSumOrderByAggregateInput = EmployeeSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeSumOrderByAggregateInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeSumOrderByAggregateInput.prototype, "hoursWorked", void 0);
exports.EmployeeSumOrderByAggregateInput = EmployeeSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeSumOrderByAggregateInput", {})
], EmployeeSumOrderByAggregateInput);
