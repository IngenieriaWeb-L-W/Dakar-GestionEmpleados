"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const InventoryMovementListRelationFilter_1 = require("../inputs/InventoryMovementListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let MaterialWhereInput = class MaterialWhereInput {
};
exports.MaterialWhereInput = MaterialWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], MaterialWhereInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], MaterialWhereInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter)
], MaterialWhereInput.prototype, "movements", void 0);
exports.MaterialWhereInput = MaterialWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialWhereInput", {})
], MaterialWhereInput);
