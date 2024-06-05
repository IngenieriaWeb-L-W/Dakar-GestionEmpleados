"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByMaterialArgs_1 = require("./args/GroupByMaterialArgs");
const Material_1 = require("../../../models/Material");
const MaterialGroupBy_1 = require("../../outputs/MaterialGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMaterialResolver = class GroupByMaterialResolver {
    async groupByMaterial(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByMaterialResolver = GroupByMaterialResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MaterialGroupBy_1.MaterialGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMaterialArgs_1.GroupByMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMaterialResolver.prototype, "groupByMaterial", null);
exports.GroupByMaterialResolver = GroupByMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], GroupByMaterialResolver);
