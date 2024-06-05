"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEmployeeArgs_1 = require("./args/UpdateManyEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEmployeeResolver = class UpdateManyEmployeeResolver {
    async updateManyEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyEmployeeResolver = UpdateManyEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmployeeArgs_1.UpdateManyEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEmployeeResolver.prototype, "updateManyEmployee", null);
exports.UpdateManyEmployeeResolver = UpdateManyEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], UpdateManyEmployeeResolver);
