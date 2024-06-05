"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const Material_1 = require("../../../models/Material");
const User_1 = require("../../../models/User");
const MaterialMovementsArgs_1 = require("./args/MaterialMovementsArgs");
const helpers_1 = require("../../../helpers");
let MaterialRelationsResolver = class MaterialRelationsResolver {
    async createdBy(material, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findUniqueOrThrow({
            where: {
                id: material.id,
            },
        }).createdBy({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async movements(material, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findUniqueOrThrow({
            where: {
                id: material.id,
            },
        }).movements({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.MaterialRelationsResolver = MaterialRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Material_1.Material, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialRelationsResolver.prototype, "createdBy", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [InventoryMovement_1.InventoryMovement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Material_1.Material, Object, Object, MaterialMovementsArgs_1.MaterialMovementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialRelationsResolver.prototype, "movements", null);
exports.MaterialRelationsResolver = MaterialRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], MaterialRelationsResolver);
