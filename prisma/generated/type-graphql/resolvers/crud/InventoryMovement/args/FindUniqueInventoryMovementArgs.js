"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereUniqueInput_1 = require("../../../inputs/InventoryMovementWhereUniqueInput");
let FindUniqueInventoryMovementArgs = class FindUniqueInventoryMovementArgs {
};
exports.FindUniqueInventoryMovementArgs = FindUniqueInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], FindUniqueInventoryMovementArgs.prototype, "where", void 0);
exports.FindUniqueInventoryMovementArgs = FindUniqueInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueInventoryMovementArgs);
