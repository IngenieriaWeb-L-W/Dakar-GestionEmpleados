"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneMaterialArgs_1 = require("./args/UpsertOneMaterialArgs");
const Material_1 = require("../../../models/Material");
const helpers_1 = require("../../../helpers");
let UpsertOneMaterialResolver = class UpsertOneMaterialResolver {
    async upsertOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneMaterialResolver = UpsertOneMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Material_1.Material, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneMaterialArgs_1.UpsertOneMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneMaterialResolver.prototype, "upsertOneMaterial", null);
exports.UpsertOneMaterialResolver = UpsertOneMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], UpsertOneMaterialResolver);
