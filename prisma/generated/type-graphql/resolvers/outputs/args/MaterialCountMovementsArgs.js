"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCountMovementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereInput_1 = require("../../inputs/InventoryMovementWhereInput");
let MaterialCountMovementsArgs = class MaterialCountMovementsArgs {
};
exports.MaterialCountMovementsArgs = MaterialCountMovementsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], MaterialCountMovementsArgs.prototype, "where", void 0);
exports.MaterialCountMovementsArgs = MaterialCountMovementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], MaterialCountMovementsArgs);
