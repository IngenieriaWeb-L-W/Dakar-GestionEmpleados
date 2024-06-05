"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMaterialArgs_1 = require("./args/AggregateMaterialArgs");
const Material_1 = require("../../../models/Material");
const AggregateMaterial_1 = require("../../outputs/AggregateMaterial");
const helpers_1 = require("../../../helpers");
let AggregateMaterialResolver = class AggregateMaterialResolver {
    async aggregateMaterial(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).material.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateMaterialResolver = AggregateMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMaterial_1.AggregateMaterial, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMaterialArgs_1.AggregateMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMaterialResolver.prototype, "aggregateMaterial", null);
exports.AggregateMaterialResolver = AggregateMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], AggregateMaterialResolver);
