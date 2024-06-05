"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleMinAggregate = class RoleMinAggregate {
};
exports.RoleMinAggregate = RoleMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleMinAggregate.prototype, "updatedAt", void 0);
exports.RoleMinAggregate = RoleMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleMinAggregate", {})
], RoleMinAggregate);
