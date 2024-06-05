"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyInventoryMovementArgs_1 = require("./args/FindManyInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let FindManyInventoryMovementResolver = class FindManyInventoryMovementResolver {
    async inventoryMovements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyInventoryMovementResolver = FindManyInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InventoryMovement_1.InventoryMovement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInventoryMovementArgs_1.FindManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyInventoryMovementResolver.prototype, "inventoryMovements", null);
exports.FindManyInventoryMovementResolver = FindManyInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], FindManyInventoryMovementResolver);
