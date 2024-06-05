"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEmployeeArgs_1 = require("./args/AggregateEmployeeArgs");
const CreateManyEmployeeArgs_1 = require("./args/CreateManyEmployeeArgs");
const CreateOneEmployeeArgs_1 = require("./args/CreateOneEmployeeArgs");
const DeleteManyEmployeeArgs_1 = require("./args/DeleteManyEmployeeArgs");
const DeleteOneEmployeeArgs_1 = require("./args/DeleteOneEmployeeArgs");
const FindFirstEmployeeArgs_1 = require("./args/FindFirstEmployeeArgs");
const FindFirstEmployeeOrThrowArgs_1 = require("./args/FindFirstEmployeeOrThrowArgs");
const FindManyEmployeeArgs_1 = require("./args/FindManyEmployeeArgs");
const FindUniqueEmployeeArgs_1 = require("./args/FindUniqueEmployeeArgs");
const FindUniqueEmployeeOrThrowArgs_1 = require("./args/FindUniqueEmployeeOrThrowArgs");
const GroupByEmployeeArgs_1 = require("./args/GroupByEmployeeArgs");
const UpdateManyEmployeeArgs_1 = require("./args/UpdateManyEmployeeArgs");
const UpdateOneEmployeeArgs_1 = require("./args/UpdateOneEmployeeArgs");
const UpsertOneEmployeeArgs_1 = require("./args/UpsertOneEmployeeArgs");
const helpers_1 = require("../../../helpers");
const Employee_1 = require("../../../models/Employee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmployee_1 = require("../../outputs/AggregateEmployee");
const EmployeeGroupBy_1 = require("../../outputs/EmployeeGroupBy");
let EmployeeCrudResolver = class EmployeeCrudResolver {
    async aggregateEmployee(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmployeeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async employees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async employee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByEmployee(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.EmployeeCrudResolver = EmployeeCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmployee_1.AggregateEmployee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmployeeArgs_1.AggregateEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeCrudResolver.prototype, "aggregateEmployee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmployeeArgs_1.CreateManyEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeCrudResolver.prototype, "createManyEmployee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Employee_1.Employee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEmployeeArgs_1.CreateOneEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeCrudResolver.prototype, "createOneEmployee", null);
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
], EmployeeCrudResolver.prototype, "deleteManyEmployee", null);
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
], EmployeeCrudResolver.prototype, "deleteOneEmployee", null);
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
], EmployeeCrudResolver.prototype, "findFirstEmployee", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Employee_1.Employee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmployeeOrThrowArgs_1.FindFirstEmployeeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeCrudResolver.prototype, "findFirstEmployeeOrThrow", null);
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
], EmployeeCrudResolver.prototype, "employees", null);
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
], EmployeeCrudResolver.prototype, "employee", null);
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
], EmployeeCrudResolver.prototype, "getEmployee", null);
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
], EmployeeCrudResolver.prototype, "groupByEmployee", null);
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
], EmployeeCrudResolver.prototype, "updateManyEmployee", null);
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
], EmployeeCrudResolver.prototype, "updateOneEmployee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Employee_1.Employee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEmployeeArgs_1.UpsertOneEmployeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeCrudResolver.prototype, "upsertOneEmployee", null);
exports.EmployeeCrudResolver = EmployeeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], EmployeeCrudResolver);
