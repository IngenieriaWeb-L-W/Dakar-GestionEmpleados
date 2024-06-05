"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEmployeeArgs_1 = require("./args/FindUniqueEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let FindUniqueEmployeeResolver = class FindUniqueEmployeeResolver {
    async employee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueEmployeeResolver = FindUniqueEmployeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmployeeArgs_1.FindUniqueEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmployeeResolver.prototype, "employee", null);
exports.FindUniqueEmployeeResolver = FindUniqueEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], FindUniqueEmployeeResolver);
