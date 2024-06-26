"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneMaterialArgs_1 = require("./args/UpdateOneMaterialArgs");
const Material_1 = require("../../../models/Material");
const helpers_1 = require("../../../helpers");
let UpdateOneMaterialResolver = class UpdateOneMaterialResolver {
    async updateOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneMaterialResolver = UpdateOneMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMaterialArgs_1.UpdateOneMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneMaterialResolver.prototype, "updateOneMaterial", null);
exports.UpdateOneMaterialResolver = UpdateOneMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], UpdateOneMaterialResolver);
