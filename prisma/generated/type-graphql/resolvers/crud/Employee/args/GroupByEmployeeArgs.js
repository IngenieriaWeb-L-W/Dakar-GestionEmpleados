"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeOrderByWithAggregationInput_1 = require("../../../inputs/EmployeeOrderByWithAggregationInput");
const EmployeeScalarWhereWithAggregatesInput_1 = require("../../../inputs/EmployeeScalarWhereWithAggregatesInput");
const EmployeeWhereInput_1 = require("../../../inputs/EmployeeWhereInput");
const EmployeeScalarFieldEnum_1 = require("../../../../enums/EmployeeScalarFieldEnum");
let GroupByEmployeeArgs = class GroupByEmployeeArgs {
};
exports.GroupByEmployeeArgs = GroupByEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], GroupByEmployeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeOrderByWithAggregationInput_1.EmployeeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmployeeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeScalarFieldEnum_1.EmployeeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmployeeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeScalarWhereWithAggregatesInput_1.EmployeeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeScalarWhereWithAggregatesInput_1.EmployeeScalarWhereWithAggregatesInput)
], GroupByEmployeeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmployeeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmployeeArgs.prototype, "skip", void 0);
exports.GroupByEmployeeArgs = GroupByEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEmployeeArgs);
