"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmployeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneEmployeeArgs_1 = require("./args/CreateOneEmployeeArgs");
const Employee_1 = require("../../../models/Employee");
const helpers_1 = require("../../../helpers");
let CreateOneEmployeeResolver = class CreateOneEmployeeResolver {
    async createOneEmployee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employee.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneEmployeeResolver = CreateOneEmployeeResolver;
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
], CreateOneEmployeeResolver.prototype, "createOneEmployee", null);
exports.CreateOneEmployeeResolver = CreateOneEmployeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Employee_1.Employee)
], CreateOneEmployeeResolver);
