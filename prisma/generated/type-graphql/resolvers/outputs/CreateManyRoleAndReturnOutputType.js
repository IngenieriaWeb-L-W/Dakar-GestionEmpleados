"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRoleAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let CreateManyRoleAndReturnOutputType = class CreateManyRoleAndReturnOutputType {
};
exports.CreateManyRoleAndReturnOutputType = CreateManyRoleAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyRoleAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyRoleAndReturnOutputType.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyRoleAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyRoleAndReturnOutputType.prototype, "updatedAt", void 0);
exports.CreateManyRoleAndReturnOutputType = CreateManyRoleAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyRoleAndReturnOutputType", {})
], CreateManyRoleAndReturnOutputType);
