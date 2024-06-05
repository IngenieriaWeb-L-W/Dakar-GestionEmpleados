"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const InventoryMovementListRelationFilter_1 = require("../inputs/InventoryMovementListRelationFilter");
const MaterialWhereInput_1 = require("../inputs/MaterialWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let MaterialWhereUniqueInput = class MaterialWhereUniqueInput {
};
exports.MaterialWhereUniqueInput = MaterialWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput_1.MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput_1.MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereInput_1.MaterialWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], MaterialWhereUniqueInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MaterialWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MaterialWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], MaterialWhereUniqueInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementListRelationFilter_1.InventoryMovementListRelationFilter)
], MaterialWhereUniqueInput.prototype, "movements", void 0);
exports.MaterialWhereUniqueInput = MaterialWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialWhereUniqueInput", {})
], MaterialWhereUniqueInput);
