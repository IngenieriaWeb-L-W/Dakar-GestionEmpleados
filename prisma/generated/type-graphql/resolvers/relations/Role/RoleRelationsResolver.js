"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Role_1 = require("../../../models/Role");
const User_1 = require("../../../models/User");
const RoleUsersArgs_1 = require("./args/RoleUsersArgs");
const helpers_1 = require("../../../helpers");
let RoleRelationsResolver = class RoleRelationsResolver {
    async users(role, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUniqueOrThrow({
            where: {
                id: role.id,
            },
        }).users({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.RoleRelationsResolver = RoleRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_1.Role, Object, Object, RoleUsersArgs_1.RoleUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleRelationsResolver.prototype, "users", null);
exports.RoleRelationsResolver = RoleRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], RoleRelationsResolver);
