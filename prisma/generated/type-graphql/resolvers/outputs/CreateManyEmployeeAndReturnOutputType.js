"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmployeeAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyEmployeeAndReturnOutputType = class CreateManyEmployeeAndReturnOutputType {
};
exports.CreateManyEmployeeAndReturnOutputType = CreateManyEmployeeAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEmployeeAndReturnOutputType.prototype, "hireDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmployeeAndReturnOutputType.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyEmployeeAndReturnOutputType.prototype, "salary", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyEmployeeAndReturnOutputType.prototype, "hoursWorked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEmployeeAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEmployeeAndReturnOutputType.prototype, "updatedAt", void 0);
exports.CreateManyEmployeeAndReturnOutputType = CreateManyEmployeeAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyEmployeeAndReturnOutputType", {})
], CreateManyEmployeeAndReturnOutputType);
