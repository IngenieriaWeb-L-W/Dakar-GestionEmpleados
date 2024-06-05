"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleCreateManyInput = class RoleCreateManyInput {
};
exports.RoleCreateManyInput = RoleCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateManyInput.prototype, "updatedAt", void 0);
exports.RoleCreateManyInput = RoleCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateManyInput", {})
], RoleCreateManyInput);
