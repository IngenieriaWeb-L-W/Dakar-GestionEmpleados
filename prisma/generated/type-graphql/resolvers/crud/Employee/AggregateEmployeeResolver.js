"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEmployeeArgs_1 = require("./args/AggregateEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const AggregateEmployee_1 = require("../../outputs/AggregateEmployee");
const helpers_1 = require("../../../helpers");
let AggregateEmployeeResolver = class AggregateEmployeeResolver {
    async aggregateEmployee(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateEmployeeResolver = AggregateEmployeeResolver;
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
], AggregateEmployeeResolver.prototype, "aggregateEmployee", null);
exports.AggregateEmployeeResolver = AggregateEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], AggregateEmployeeResolver);
