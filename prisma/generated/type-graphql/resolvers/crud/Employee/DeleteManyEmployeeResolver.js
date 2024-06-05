"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyEmployeeArgs_1 = require("./args/DeleteManyEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyEmployeeResolver = class DeleteManyEmployeeResolver {
    async deleteManyEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyEmployeeResolver = DeleteManyEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEmployeeArgs_1.DeleteManyEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyEmployeeResolver.prototype, "deleteManyEmployee", null);
exports.DeleteManyEmployeeResolver = DeleteManyEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], DeleteManyEmployeeResolver);
