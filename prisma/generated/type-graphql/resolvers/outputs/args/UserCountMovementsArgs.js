"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountMovementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementWhereInput_1 = require("../../inputs/InventoryMovementWhereInput");
let UserCountMovementsArgs = class UserCountMovementsArgs {
};
exports.UserCountMovementsArgs = UserCountMovementsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereInput_1.InventoryMovementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereInput_1.InventoryMovementWhereInput)
], UserCountMovementsArgs.prototype, "where", void 0);
exports.UserCountMovementsArgs = UserCountMovementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountMovementsArgs);
