"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateInput_1 = require("../../../inputs/InventoryMovementCreateInput");
let CreateOneInventoryMovementArgs = class CreateOneInventoryMovementArgs {
};
exports.CreateOneInventoryMovementArgs = CreateOneInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateInput_1.InventoryMovementCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateInput_1.InventoryMovementCreateInput)
], CreateOneInventoryMovementArgs.prototype, "data", void 0);
exports.CreateOneInventoryMovementArgs = CreateOneInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInventoryMovementArgs);
