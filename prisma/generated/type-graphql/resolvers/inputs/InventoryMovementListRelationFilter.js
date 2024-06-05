"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereInput_1 = require("../inputs/InventoryMovementWhereInput");
let InventoryMovementListRelationFilter = class InventoryMovementListRelationFilter {
};
exports.InventoryMovementListRelationFilter = InventoryMovementListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], InventoryMovementListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], InventoryMovementListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], InventoryMovementListRelationFilter.prototype, "none", void 0);
exports.InventoryMovementListRelationFilter = InventoryMovementListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementListRelationFilter", {})
], InventoryMovementListRelationFilter);
