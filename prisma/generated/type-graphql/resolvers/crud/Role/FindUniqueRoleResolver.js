"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRoleArgs_1 = require("./args/FindUniqueRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let FindUniqueRoleResolver = class FindUniqueRoleResolver {
    async role(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueRoleResolver = FindUniqueRoleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoleArgs_1.FindUniqueRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRoleResolver.prototype, "role", null);
exports.FindUniqueRoleResolver = FindUniqueRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], FindUniqueRoleResolver);
