"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyInventoryMovementArgs_1 = require("./args/CreateManyInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyInventoryMovementResolver = class CreateManyInventoryMovementResolver {
    async createManyInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyInventoryMovementResolver = CreateManyInventoryMovementResolver;
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
], CreateManyInventoryMovementResolver.prototype, "createManyInventoryMovement", null);
exports.CreateManyInventoryMovementResolver = CreateManyInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], CreateManyInventoryMovementResolver);
