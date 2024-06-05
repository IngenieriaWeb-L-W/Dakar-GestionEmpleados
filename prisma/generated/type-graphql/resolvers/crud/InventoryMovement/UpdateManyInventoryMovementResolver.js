"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyInventoryMovementArgs_1 = require("./args/UpdateManyInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInventoryMovementResolver = class UpdateManyInventoryMovementResolver {
    async updateManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyInventoryMovementResolver = UpdateManyInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInventoryMovementArgs_1.UpdateManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyInventoryMovementResolver.prototype, "updateManyInventoryMovement", null);
exports.UpdateManyInventoryMovementResolver = UpdateManyInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], UpdateManyInventoryMovementResolver);
