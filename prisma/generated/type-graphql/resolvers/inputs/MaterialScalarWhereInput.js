"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let MaterialScalarWhereInput = class MaterialScalarWhereInput {
};
exports.MaterialScalarWhereInput = MaterialScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], MaterialScalarWhereInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialScalarWhereInput.prototype, "updatedAt", void 0);
exports.MaterialScalarWhereInput = MaterialScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialScalarWhereInput", {})
], MaterialScalarWhereInput);
