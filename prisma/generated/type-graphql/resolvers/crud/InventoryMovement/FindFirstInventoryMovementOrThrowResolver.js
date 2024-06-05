"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInventoryMovementOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInventoryMovementOrThrowArgs_1 = require("./args/FindFirstInventoryMovementOrThrowArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let FindFirstInventoryMovementOrThrowResolver = class FindFirstInventoryMovementOrThrowResolver {
    async findFirstInventoryMovementOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstInventoryMovementOrThrowResolver = FindFirstInventoryMovementOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInventoryMovementOrThrowArgs_1.FindFirstInventoryMovementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInventoryMovementOrThrowResolver.prototype, "findFirstInventoryMovementOrThrow", null);
exports.FindFirstInventoryMovementOrThrowResolver = FindFirstInventoryMovementOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], FindFirstInventoryMovementOrThrowResolver);
