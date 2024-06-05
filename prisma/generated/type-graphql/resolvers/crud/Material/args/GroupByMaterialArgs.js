"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialOrderByWithAggregationInput_1 = require("../../../inputs/MaterialOrderByWithAggregationInput");
const MaterialScalarWhereWithAggregatesInput_1 = require("../../../inputs/MaterialScalarWhereWithAggregatesInput");
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
const MaterialScalarFieldEnum_1 = require("../../../../enums/MaterialScalarFieldEnum");
let GroupByMaterialArgs = class GroupByMaterialArgs {
};
exports.GroupByMaterialArgs = GroupByMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], GroupByMaterialArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialOrderByWithAggregationInput_1.MaterialOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMaterialArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarFieldEnum_1.MaterialScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMaterialArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialScalarWhereWithAggregatesInput_1.MaterialScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialScalarWhereWithAggregatesInput_1.MaterialScalarWhereWithAggregatesInput)
], GroupByMaterialArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMaterialArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMaterialArgs.prototype, "skip", void 0);
exports.GroupByMaterialArgs = GroupByMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMaterialArgs);
