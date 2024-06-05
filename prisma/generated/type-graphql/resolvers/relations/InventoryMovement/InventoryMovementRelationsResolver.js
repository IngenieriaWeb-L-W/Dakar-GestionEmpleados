"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const Material_1 = require("../../../models/Material");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let InventoryMovementRelationsResolver = class InventoryMovementRelationsResolver {
    async material(inventoryMovement, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findUniqueOrThrow({
            where: {
                id: inventoryMovement.id,
            },
        }).material({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createdBy(inventoryMovement, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findUniqueOrThrow({
            where: {
                id: inventoryMovement.id,
            },
        }).createdBy({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.InventoryMovementRelationsResolver = InventoryMovementRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Material_1.Material, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [InventoryMovement_1.InventoryMovement, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementRelationsResolver.prototype, "material", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [InventoryMovement_1.InventoryMovement, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementRelationsResolver.prototype, "createdBy", null);
exports.InventoryMovementRelationsResolver = InventoryMovementRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], InventoryMovementRelationsResolver);
