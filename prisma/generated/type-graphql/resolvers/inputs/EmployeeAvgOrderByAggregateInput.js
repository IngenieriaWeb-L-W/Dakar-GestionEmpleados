"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmployeeAvgOrderByAggregateInput = class EmployeeAvgOrderByAggregateInput {
};
exports.EmployeeAvgOrderByAggregateInput = EmployeeAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeAvgOrderByAggregateInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeAvgOrderByAggregateInput.prototype, "hoursWorked", void 0);
exports.EmployeeAvgOrderByAggregateInput = EmployeeAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeAvgOrderByAggregateInput", {})
], EmployeeAvgOrderByAggregateInput);
