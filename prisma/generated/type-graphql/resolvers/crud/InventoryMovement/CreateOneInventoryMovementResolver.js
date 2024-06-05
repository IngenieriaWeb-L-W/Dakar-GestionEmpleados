"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneInventoryMovementArgs_1 = require("./args/CreateOneInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const helpers_1 = require("../../../helpers");
let CreateOneInventoryMovementResolver = class CreateOneInventoryMovementResolver {
    async createOneInventoryMovement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneInventoryMovementResolver = CreateOneInventoryMovementResolver;
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
], CreateOneInventoryMovementResolver.prototype, "createOneInventoryMovement", null);
exports.CreateOneInventoryMovementResolver = CreateOneInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], CreateOneInventoryMovementResolver);
