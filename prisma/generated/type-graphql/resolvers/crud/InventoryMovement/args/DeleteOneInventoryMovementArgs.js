"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
let DeleteOneInventoryMovementArgs = class DeleteOneInventoryMovementArgs {
};
exports.DeleteOneInventoryMovementArgs = DeleteOneInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], DeleteOneInventoryMovementArgs.prototype, "where", void 0);
exports.DeleteOneInventoryMovementArgs = DeleteOneInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneInventoryMovementArgs);
