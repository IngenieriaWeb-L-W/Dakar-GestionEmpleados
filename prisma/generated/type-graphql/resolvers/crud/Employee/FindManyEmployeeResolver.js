"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyEmployeeArgs_1 = require("./args/FindManyEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let FindManyEmployeeResolver = class FindManyEmployeeResolver {
    async employees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyEmployeeResolver = FindManyEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Employee_1.Employee], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmployeeArgs_1.FindManyEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyEmployeeResolver.prototype, "employees", null);
exports.FindManyEmployeeResolver = FindManyEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], FindManyEmployeeResolver);
