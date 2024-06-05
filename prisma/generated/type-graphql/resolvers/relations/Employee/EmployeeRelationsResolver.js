"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Employee_1 = require("../../../models/Employee");
const Evaluation_1 = require("../../../models/Evaluation");
const EmployeeEvaluationsArgs_1 = require("./args/EmployeeEvaluationsArgs");
const helpers_1 = require("../../../helpers");
let EmployeeRelationsResolver = class EmployeeRelationsResolver {
    async evaluations(employee, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findUniqueOrThrow({
            where: {
                id: employee.id,
            },
        }).evaluations({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.EmployeeRelationsResolver = EmployeeRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Evaluation_1.Evaluation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Employee_1.Employee, Object, Object, EmployeeEvaluationsArgs_1.EmployeeEvaluationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeRelationsResolver.prototype, "evaluations", null);
exports.EmployeeRelationsResolver = EmployeeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], EmployeeRelationsResolver);
