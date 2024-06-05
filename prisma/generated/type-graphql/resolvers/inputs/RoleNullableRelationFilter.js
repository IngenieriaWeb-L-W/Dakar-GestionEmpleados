"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleNullableRelationFilter = class RoleNullableRelationFilter {
};
exports.RoleNullableRelationFilter = RoleNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleNullableRelationFilter.prototype, "isNot", void 0);
exports.RoleNullableRelationFilter = RoleNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleNullableRelationFilter", {})
], RoleNullableRelationFilter);
