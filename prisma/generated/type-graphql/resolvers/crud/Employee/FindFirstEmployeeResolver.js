"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstEmployeeArgs_1 = require("./args/FindFirstEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let FindFirstEmployeeResolver = class FindFirstEmployeeResolver {
    async findFirstEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstEmployeeResolver = FindFirstEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmployeeArgs_1.FindFirstEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEmployeeResolver.prototype, "findFirstEmployee", null);
exports.FindFirstEmployeeResolver = FindFirstEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], FindFirstEmployeeResolver);
