"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInventoryMovementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyInput_1 = require("../../../inputs/InventoryMovementCreateManyInput");
let CreateManyInventoryMovementArgs = class CreateManyInventoryMovementArgs {
};
exports.CreateManyInventoryMovementArgs = CreateManyInventoryMovementArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateManyInput_1.InventoryMovementCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInventoryMovementArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInventoryMovementArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyInventoryMovementArgs = CreateManyInventoryMovementArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInventoryMovementArgs);
