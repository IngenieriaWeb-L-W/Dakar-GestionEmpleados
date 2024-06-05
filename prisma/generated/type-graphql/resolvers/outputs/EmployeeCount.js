"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmployeeCountEvaluationsArgs_1 = require("./args/EmployeeCountEvaluationsArgs");
let EmployeeCount = class EmployeeCount {
    getEvaluations(root, args) {
        return root.evaluations;
    }
};
exports.EmployeeCount = EmployeeCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "evaluations",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [EmployeeCount, EmployeeCountEvaluationsArgs_1.EmployeeCountEvaluationsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], EmployeeCount.prototype, "getEvaluations", null);
exports.EmployeeCount = EmployeeCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmployeeCount", {})
], EmployeeCount);
