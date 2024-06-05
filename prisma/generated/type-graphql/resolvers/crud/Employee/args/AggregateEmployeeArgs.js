"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmployeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeOrderByWithRelationInput_1 = require("../../../inputs/EmployeeOrderByWithRelationInput");
const EmployeeWhereInput_1 = require("../../../inputs/EmployeeWhereInput");
const EmployeeWhereUniqueInput_1 = require("../../../inputs/EmployeeWhereUniqueInput");
let AggregateEmployeeArgs = class AggregateEmployeeArgs {
};
exports.AggregateEmployeeArgs = AggregateEmployeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereInput_1.EmployeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereInput_1.EmployeeWhereInput)
], AggregateEmployeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmployeeOrderByWithRelationInput_1.EmployeeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEmployeeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmployeeWhereUniqueInput_1.EmployeeWhereUniqueInput)
], AggregateEmployeeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmployeeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmployeeArgs.prototype, "skip", void 0);
exports.AggregateEmployeeArgs = AggregateEmployeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEmployeeArgs);
