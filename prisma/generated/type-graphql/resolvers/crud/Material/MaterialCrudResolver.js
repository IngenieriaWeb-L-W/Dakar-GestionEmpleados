"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMaterialArgs_1 = require("./args/AggregateMaterialArgs");
const CreateManyMaterialArgs_1 = require("./args/CreateManyMaterialArgs");
const CreateOneMaterialArgs_1 = require("./args/CreateOneMaterialArgs");
const DeleteManyMaterialArgs_1 = require("./args/DeleteManyMaterialArgs");
const DeleteOneMaterialArgs_1 = require("./args/DeleteOneMaterialArgs");
const FindFirstMaterialArgs_1 = require("./args/FindFirstMaterialArgs");
const FindFirstMaterialOrThrowArgs_1 = require("./args/FindFirstMaterialOrThrowArgs");
const FindManyMaterialArgs_1 = require("./args/FindManyMaterialArgs");
const FindUniqueMaterialArgs_1 = require("./args/FindUniqueMaterialArgs");
const FindUniqueMaterialOrThrowArgs_1 = require("./args/FindUniqueMaterialOrThrowArgs");
const GroupByMaterialArgs_1 = require("./args/GroupByMaterialArgs");
const UpdateManyMaterialArgs_1 = require("./args/UpdateManyMaterialArgs");
const UpdateOneMaterialArgs_1 = require("./args/UpdateOneMaterialArgs");
const UpsertOneMaterialArgs_1 = require("./args/UpsertOneMaterialArgs");
const helpers_1 = require("../../../helpers");
const Material_1 = require("../../../models/Material");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMaterial_1 = require("../../outputs/AggregateMaterial");
const MaterialGroupBy_1 = require("../../outputs/MaterialGroupBy");
let MaterialCrudResolver = class MaterialCrudResolver {
    async aggregateMaterial(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).material.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMaterialOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async materials(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async material(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByMaterial(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.MaterialCrudResolver = MaterialCrudResolver;
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
], MaterialCrudResolver.prototype, "aggregateMaterial", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMaterialArgs_1.CreateManyMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "createManyMaterial", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Material_1.Material, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMaterialArgs_1.CreateOneMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "createOneMaterial", null);
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
], MaterialCrudResolver.prototype, "deleteManyMaterial", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMaterialArgs_1.DeleteOneMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "deleteOneMaterial", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMaterialArgs_1.FindFirstMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "findFirstMaterial", null);
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
], MaterialCrudResolver.prototype, "findFirstMaterialOrThrow", null);
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
], MaterialCrudResolver.prototype, "materials", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMaterialArgs_1.FindUniqueMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "material", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Material_1.Material, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMaterialOrThrowArgs_1.FindUniqueMaterialOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "getMaterial", null);
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
], MaterialCrudResolver.prototype, "groupByMaterial", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMaterialArgs_1.UpdateManyMaterialArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialCrudResolver.prototype, "updateManyMaterial", null);
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
], MaterialCrudResolver.prototype, "updateOneMaterial", null);
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
], MaterialCrudResolver.prototype, "upsertOneMaterial", null);
exports.MaterialCrudResolver = MaterialCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], MaterialCrudResolver);
