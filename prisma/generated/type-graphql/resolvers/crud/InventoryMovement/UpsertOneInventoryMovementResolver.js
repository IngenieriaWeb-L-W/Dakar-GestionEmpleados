"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneInventoryMovementArgs_1 = require("./args/UpsertOneInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let UpsertOneInventoryMovementResolver = class UpsertOneInventoryMovementResolver {
    async upsertOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneInventoryMovementResolver = UpsertOneInventoryMovementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInventoryMovementArgs_1.UpsertOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInventoryMovementResolver.prototype, "upsertOneInventoryMovement", null);
exports.UpsertOneInventoryMovementResolver = UpsertOneInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], UpsertOneInventoryMovementResolver);
