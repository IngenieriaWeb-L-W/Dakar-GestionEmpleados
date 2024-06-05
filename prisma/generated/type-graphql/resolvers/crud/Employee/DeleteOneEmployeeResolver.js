"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneEmployeeArgs_1 = require("./args/DeleteOneEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let DeleteOneEmployeeResolver = class DeleteOneEmployeeResolver {
    async deleteOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneEmployeeResolver = DeleteOneEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEmployeeArgs_1.DeleteOneEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneEmployeeResolver.prototype, "deleteOneEmployee", null);
exports.DeleteOneEmployeeResolver = DeleteOneEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], DeleteOneEmployeeResolver);
