"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyMaterialArgs_1 = require("./args/DeleteManyMaterialArgs");
const Material_1 = require("../../../models/Material");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyMaterialResolver = class DeleteManyMaterialResolver {
    async deleteManyMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyMaterialResolver = DeleteManyMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMaterialArgs_1.DeleteManyMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyMaterialResolver.prototype, "deleteManyMaterial", null);
exports.DeleteManyMaterialResolver = DeleteManyMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], DeleteManyMaterialResolver);
