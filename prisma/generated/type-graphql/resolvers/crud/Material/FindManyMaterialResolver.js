"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyMaterialArgs_1 = require("./args/FindManyMaterialArgs");
const Material_1 = require("../../../models/Material");
const helpers_1 = require("../../../helpers");
let FindManyMaterialResolver = class FindManyMaterialResolver {
    async materials(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyMaterialResolver = FindManyMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Material_1.Material], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMaterialArgs_1.FindManyMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMaterialResolver.prototype, "materials", null);
exports.FindManyMaterialResolver = FindManyMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], FindManyMaterialResolver);
