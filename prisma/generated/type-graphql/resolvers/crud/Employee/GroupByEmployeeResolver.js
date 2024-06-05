"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByEmployeeArgs_1 = require("./args/GroupByEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const EmployeeGroupBy_1 = require("../../outputs/EmployeeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEmployeeResolver = class GroupByEmployeeResolver {
    async groupByEmployee(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByEmployeeResolver = GroupByEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmployeeGroupBy_1.EmployeeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmployeeArgs_1.GroupByEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEmployeeResolver.prototype, "groupByEmployee", null);
exports.GroupByEmployeeResolver = GroupByEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], GroupByEmployeeResolver);
