"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleMaxAggregate = class RoleMaxAggregate {
};
exports.RoleMaxAggregate = RoleMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleMaxAggregate.prototype, "updatedAt", void 0);
exports.RoleMaxAggregate = RoleMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleMaxAggregate", {})
], RoleMaxAggregate);
