"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInventoryMovementArgs_1 = require("./args/AggregateInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const AggregateInventoryMovement_1 = require("../../outputs/AggregateInventoryMovement");
const helpers_1 = require("../../../helpers");
let AggregateInventoryMovementResolver = class AggregateInventoryMovementResolver {
    async aggregateInventoryMovement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateInventoryMovementResolver = AggregateInventoryMovementResolver;
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
], AggregateInventoryMovementResolver.prototype, "aggregateInventoryMovement", null);
exports.AggregateInventoryMovementResolver = AggregateInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], AggregateInventoryMovementResolver);
