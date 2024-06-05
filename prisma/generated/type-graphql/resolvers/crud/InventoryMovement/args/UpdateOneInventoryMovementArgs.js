"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementUpdateInput_1 = require("../../../inputs/InventoryMovementUpdateInput");
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
let UpdateOneInventoryMovementArgs = class UpdateOneInventoryMovementArgs {
};
exports.UpdateOneInventoryMovementArgs = UpdateOneInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateInput_1.InventoryMovementUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateInput_1.InventoryMovementUpdateInput)
], UpdateOneInventoryMovementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], UpdateOneInventoryMovementArgs.prototype, "where", void 0);
exports.UpdateOneInventoryMovementArgs = UpdateOneInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInventoryMovementArgs);
