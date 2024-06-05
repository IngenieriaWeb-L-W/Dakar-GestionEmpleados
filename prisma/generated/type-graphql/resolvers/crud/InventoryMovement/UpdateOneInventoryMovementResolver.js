"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneInventoryMovementArgs_1 = require("./args/UpdateOneInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let UpdateOneInventoryMovementResolver = class UpdateOneInventoryMovementResolver {
    async updateOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneInventoryMovementResolver = UpdateOneInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInventoryMovementArgs_1.UpdateOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneInventoryMovementResolver.prototype, "updateOneInventoryMovement", null);
exports.UpdateOneInventoryMovementResolver = UpdateOneInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], UpdateOneInventoryMovementResolver);
