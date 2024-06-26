"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCountAggregate_1 = require("../outputs/RoleCountAggregate");
const RoleMaxAggregate_1 = require("../outputs/RoleMaxAggregate");
const RoleMinAggregate_1 = require("../outputs/RoleMinAggregate");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleGroupBy = class RoleGroupBy {
};
exports.RoleGroupBy = RoleGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RoleGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RoleGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCountAggregate_1.RoleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCountAggregate_1.RoleCountAggregate)
], RoleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMinAggregate_1.RoleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMinAggregate_1.RoleMinAggregate)
], RoleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMaxAggregate_1.RoleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMaxAggregate_1.RoleMaxAggregate)
], RoleGroupBy.prototype, "_max", void 0);
exports.RoleGroupBy = RoleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleGroupBy", {})
], RoleGroupBy);
