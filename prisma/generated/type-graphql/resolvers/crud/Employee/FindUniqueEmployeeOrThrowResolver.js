"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmployeeOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEmployeeOrThrowArgs_1 = require("./args/FindUniqueEmployeeOrThrowArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let FindUniqueEmployeeOrThrowResolver = class FindUniqueEmployeeOrThrowResolver {
    async getEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueEmployeeOrThrowResolver = FindUniqueEmployeeOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmployeeOrThrowArgs_1.FindUniqueEmployeeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmployeeOrThrowResolver.prototype, "getEmployee", null);
exports.FindUniqueEmployeeOrThrowResolver = FindUniqueEmployeeOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], FindUniqueEmployeeOrThrowResolver);
