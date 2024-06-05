"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereInput_1 = require("../../../inputs/InventoryMovementWhereInput");
let DeleteManyInventoryMovementArgs = class DeleteManyInventoryMovementArgs {
};
exports.DeleteManyInventoryMovementArgs = DeleteManyInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], DeleteManyInventoryMovementArgs.prototype, "where", void 0);
exports.DeleteManyInventoryMovementArgs = DeleteManyInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInventoryMovementArgs);
