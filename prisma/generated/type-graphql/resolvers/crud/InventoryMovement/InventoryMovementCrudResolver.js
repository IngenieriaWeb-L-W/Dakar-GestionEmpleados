"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInventoryMovementArgs_1 = require("./args/AggregateInventoryMovementArgs");
const CreateManyInventoryMovementArgs_1 = require("./args/CreateManyInventoryMovementArgs");
const CreateOneInventoryMovementArgs_1 = require("./args/CreateOneInventoryMovementArgs");
const DeleteManyInventoryMovementArgs_1 = require("./args/DeleteManyInventoryMovementArgs");
const DeleteOneInventoryMovementArgs_1 = require("./args/DeleteOneInventoryMovementArgs");
const FindFirstInventoryMovementArgs_1 = require("./args/FindFirstInventoryMovementArgs");
const FindFirstInventoryMovementOrThrowArgs_1 = require("./args/FindFirstInventoryMovementOrThrowArgs");
const FindManyInventoryMovementArgs_1 = require("./args/FindManyInventoryMovementArgs");
const FindUniqueInventoryMovementArgs_1 = require("./args/FindUniqueInventoryMovementArgs");
const FindUniqueInventoryMovementOrThrowArgs_1 = require("./args/FindUniqueInventoryMovementOrThrowArgs");
const GroupByInventoryMovementArgs_1 = require("./args/GroupByInventoryMovementArgs");
const UpdateManyInventoryMovementArgs_1 = require("./args/UpdateManyInventoryMovementArgs");
const UpdateOneInventoryMovementArgs_1 = require("./args/UpdateOneInventoryMovementArgs");
const UpsertOneInventoryMovementArgs_1 = require("./args/UpsertOneInventoryMovementArgs");
const helpers_1 = require("../../../helpers");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInventoryMovement_1 = require("../../outputs/AggregateInventoryMovement");
const InventoryMovementGroupBy_1 = require("../../outputs/InventoryMovementGroupBy");
let InventoryMovementCrudResolver = class InventoryMovementCrudResolver {
    async aggregateInventoryMovement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInventoryMovementOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inventoryMovements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByInventoryMovement(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.InventoryMovementCrudResolver = InventoryMovementCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInventoryMovement_1.AggregateInventoryMovement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInventoryMovementArgs_1.AggregateInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "aggregateInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInventoryMovementArgs_1.CreateManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "createManyInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInventoryMovementArgs_1.CreateOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "createOneInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInventoryMovementArgs_1.DeleteManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "deleteManyInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInventoryMovementArgs_1.DeleteOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "deleteOneInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInventoryMovementArgs_1.FindFirstInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "findFirstInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInventoryMovementOrThrowArgs_1.FindFirstInventoryMovementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "findFirstInventoryMovementOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InventoryMovement_1.InventoryMovement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInventoryMovementArgs_1.FindManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "inventoryMovements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInventoryMovementArgs_1.FindUniqueInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "inventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInventoryMovementOrThrowArgs_1.FindUniqueInventoryMovementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "getInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InventoryMovementGroupBy_1.InventoryMovementGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInventoryMovementArgs_1.GroupByInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "groupByInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInventoryMovementArgs_1.UpdateManyInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "updateManyInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInventoryMovementArgs_1.UpdateOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "updateOneInventoryMovement", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => InventoryMovement_1.InventoryMovement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInventoryMovementArgs_1.UpsertOneInventoryMovementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryMovementCrudResolver.prototype, "upsertOneInventoryMovement", null);
exports.InventoryMovementCrudResolver = InventoryMovementCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], InventoryMovementCrudResolver);
