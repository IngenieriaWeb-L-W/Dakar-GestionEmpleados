"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyInventoryMovementArgs_1 = require("./args/DeleteManyInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyInventoryMovementResolver = class DeleteManyInventoryMovementResolver {
    async deleteManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyInventoryMovementResolver = DeleteManyInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInventoryMovementArgs_1.DeleteManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyInventoryMovementResolver.prototype, "deleteManyInventoryMovement", null);
exports.DeleteManyInventoryMovementResolver = DeleteManyInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], DeleteManyInventoryMovementResolver);
