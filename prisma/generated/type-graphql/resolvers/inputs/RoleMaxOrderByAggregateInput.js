"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoleMaxOrderByAggregateInput = class RoleMaxOrderByAggregateInput {
};
exports.RoleMaxOrderByAggregateInput = RoleMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.RoleMaxOrderByAggregateInput = RoleMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleMaxOrderByAggregateInput", {})
], RoleMaxOrderByAggregateInput);
