"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMaterialResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyMaterialArgs_1 = require("./args/CreateManyMaterialArgs");
const Material_1 = require("../../../models/Material");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyMaterialResolver = class CreateManyMaterialResolver {
    async createManyMaterial(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).material.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyMaterialResolver = CreateManyMaterialResolver;
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
], CreateManyMaterialResolver.prototype, "createManyMaterial", null);
exports.CreateManyMaterialResolver = CreateManyMaterialResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Material_1.Material)
], CreateManyMaterialResolver);
