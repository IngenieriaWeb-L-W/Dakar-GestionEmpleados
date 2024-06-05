"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneEmployeeArgs_1 = require("./args/UpdateOneEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let UpdateOneEmployeeResolver = class UpdateOneEmployeeResolver {
    async updateOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneEmployeeResolver = UpdateOneEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmployeeArgs_1.UpdateOneEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneEmployeeResolver.prototype, "updateOneEmployee", null);
exports.UpdateOneEmployeeResolver = UpdateOneEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], UpdateOneEmployeeResolver);
