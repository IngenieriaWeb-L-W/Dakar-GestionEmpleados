"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEvaluationAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Employee_1 = require("../outputs/Employee");
let CreateManyEvaluationAndReturnOutputType = class CreateManyEvaluationAndReturnOutputType {
};
exports.CreateManyEvaluationAndReturnOutputType = CreateManyEvaluationAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEvaluationAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEvaluationAndReturnOutputType.prototype, "employeeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyEvaluationAndReturnOutputType.prototype, "performance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEvaluationAndReturnOutputType.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEvaluationAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEvaluationAndReturnOutputType.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Employee_1.Employee, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Employee_1.Employee !== "undefined" && Employee_1.Employee) === "function" ? _a : Object)
], CreateManyEvaluationAndReturnOutputType.prototype, "employee", void 0);
exports.CreateManyEvaluationAndReturnOutputType = CreateManyEvaluationAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyEvaluationAndReturnOutputType", {})
], CreateManyEvaluationAndReturnOutputType);
