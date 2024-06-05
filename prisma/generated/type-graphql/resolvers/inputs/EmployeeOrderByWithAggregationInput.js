"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeAvgOrderByAggregateInput_1 = require("../inputs/EmployeeAvgOrderByAggregateInput");
const EmployeeCountOrderByAggregateInput_1 = require("../inputs/EmployeeCountOrderByAggregateInput");
const EmployeeMaxOrderByAggregateInput_1 = require("../inputs/EmployeeMaxOrderByAggregateInput");
const EmployeeMinOrderByAggregateInput_1 = require("../inputs/EmployeeMinOrderByAggregateInput");
const EmployeeSumOrderByAggregateInput_1 = require("../inputs/EmployeeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmployeeOrderByWithAggregationInput = class EmployeeOrderByWithAggregationInput {
};
exports.EmployeeOrderByWithAggregationInput = EmployeeOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeCountOrderByAggregateInput_1.EmployeeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeCountOrderByAggregateInput_1.EmployeeCountOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeAvgOrderByAggregateInput_1.EmployeeAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeAvgOrderByAggregateInput_1.EmployeeAvgOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMaxOrderByAggregateInput_1.EmployeeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMaxOrderByAggregateInput_1.EmployeeMaxOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeMinOrderByAggregateInput_1.EmployeeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeMinOrderByAggregateInput_1.EmployeeMinOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeSumOrderByAggregateInput_1.EmployeeSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeSumOrderByAggregateInput_1.EmployeeSumOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.EmployeeOrderByWithAggregationInput = EmployeeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmployeeOrderByWithAggregationInput", {})
], EmployeeOrderByWithAggregationInput);
