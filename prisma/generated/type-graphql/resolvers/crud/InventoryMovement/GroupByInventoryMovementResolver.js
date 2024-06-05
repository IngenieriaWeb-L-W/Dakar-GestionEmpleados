"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInventoryMovementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByInventoryMovementArgs_1 = require("./args/GroupByInventoryMovementArgs");
const InventoryMovement_1 = require("../../../models/InventoryMovement");
const InventoryMovementGroupBy_1 = require("../../outputs/InventoryMovementGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInventoryMovementResolver = class GroupByInventoryMovementResolver {
    async groupByInventoryMovement(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inventoryMovement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByInventoryMovementResolver = GroupByInventoryMovementResolver;
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
], GroupByInventoryMovementResolver.prototype, "groupByInventoryMovement", null);
exports.GroupByInventoryMovementResolver = GroupByInventoryMovementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => InventoryMovement_1.InventoryMovement)
], GroupByInventoryMovementResolver);
