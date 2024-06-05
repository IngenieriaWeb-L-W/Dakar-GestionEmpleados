"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMaterialOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstMaterialOrThrowArgs_1 = require("./args/FindFirstMaterialOrThrowArgs");
const Material_1 = require("../../../models/Material");
const helpers_1 = require("../../../helpers");
let FindFirstMaterialOrThrowResolver = class FindFirstMaterialOrThrowResolver {
    async findFirstMaterialOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstMaterialOrThrowResolver = FindFirstMaterialOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMaterialOrThrowArgs_1.FindFirstMaterialOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMaterialOrThrowResolver.prototype, "findFirstMaterialOrThrow", null);
exports.FindFirstMaterialOrThrowResolver = FindFirstMaterialOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], FindFirstMaterialOrThrowResolver);
