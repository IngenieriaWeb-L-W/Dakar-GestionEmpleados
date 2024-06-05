"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialMovementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementOrderByWithRelationInput_1 = require("../../../inputs/InventoryMovementOrderByWithRelationInput");
const InventoryMovementWhereInput_1 = require("../../../inputs/InventoryMovementWhereInput");
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
const InventoryMovementScalarFieldEnum_1 = require("../../../../enums/InventoryMovementScalarFieldEnum");
let MaterialMovementsArgs = class MaterialMovementsArgs {
};
exports.MaterialMovementsArgs = MaterialMovementsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], MaterialMovementsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementOrderByWithRelationInput_1.InventoryMovementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialMovementsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], MaterialMovementsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialMovementsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialMovementsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarFieldEnum_1.InventoryMovementScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialMovementsArgs.prototype, "distinct", void 0);
exports.MaterialMovementsArgs = MaterialMovementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], MaterialMovementsArgs);
