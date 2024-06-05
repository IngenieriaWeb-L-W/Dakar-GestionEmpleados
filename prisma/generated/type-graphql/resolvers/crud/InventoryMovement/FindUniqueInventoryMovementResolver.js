"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueInventoryMovementArgs_1 = require("./args/FindUniqueInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let FindUniqueInventoryMovementResolver = class FindUniqueInventoryMovementResolver {
    async inventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueInventoryMovementResolver = FindUniqueInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInventoryMovementArgs_1.FindUniqueInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueInventoryMovementResolver.prototype, "inventoryMovement", null);
exports.FindUniqueInventoryMovementResolver = FindUniqueInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], FindUniqueInventoryMovementResolver);
