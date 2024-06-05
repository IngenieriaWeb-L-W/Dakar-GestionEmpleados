"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateInput_1 = require("../../../inputs/InventoryMovementCreateInput");
const InventoryMovementUpdateInput_1 = require("../../../inputs/InventoryMovementUpdateInput");
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
let UpsertOneInventoryMovementArgs = class UpsertOneInventoryMovementArgs {
};
exports.UpsertOneInventoryMovementArgs = UpsertOneInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], UpsertOneInventoryMovementArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateInput_1.InventoryMovementCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateInput_1.InventoryMovementCreateInput)
], UpsertOneInventoryMovementArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateInput_1.InventoryMovementUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateInput_1.InventoryMovementUpdateInput)
], UpsertOneInventoryMovementArgs.prototype, "update", void 0);
exports.UpsertOneInventoryMovementArgs = UpsertOneInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInventoryMovementArgs);
