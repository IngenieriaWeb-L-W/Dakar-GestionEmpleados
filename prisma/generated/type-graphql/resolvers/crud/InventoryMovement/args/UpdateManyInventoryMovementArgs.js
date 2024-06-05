"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementUpdateManyMutationInput_1 = require("../../../inputs/InventoryMovementUpdateManyMutationInput");
const InventoryMovementWhereInput_1 = require("../../../inputs/InventoryMovementWhereInput");
let UpdateManyInventoryMovementArgs = class UpdateManyInventoryMovementArgs {
};
exports.UpdateManyInventoryMovementArgs = UpdateManyInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput)
], UpdateManyInventoryMovementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], UpdateManyInventoryMovementArgs.prototype, "where", void 0);
exports.UpdateManyInventoryMovementArgs = UpdateManyInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInventoryMovementArgs);
