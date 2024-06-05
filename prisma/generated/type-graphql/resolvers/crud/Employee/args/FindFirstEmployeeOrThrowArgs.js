"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmployeeOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeOrderByWithRelationInput_1 = require("../../../inputs/EmployeeOrderByWithRelationInput");
const EmployeeWhereInput_1 = require("../../../inputs/EmployeeWhereInput");
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
const EmployeeScalarFieldEnum_1 = require("../../../../enums/EmployeeScalarFieldEnum");
let FindFirstEmployeeOrThrowArgs = class FindFirstEmployeeOrThrowArgs {
};
exports.FindFirstEmployeeOrThrowArgs = FindFirstEmployeeOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], FindFirstEmployeeOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeOrderByWithRelationInput_1.EmployeeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmployeeOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], FindFirstEmployeeOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmployeeOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmployeeOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeScalarFieldEnum_1.EmployeeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmployeeOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstEmployeeOrThrowArgs = FindFirstEmployeeOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEmployeeOrThrowArgs);
