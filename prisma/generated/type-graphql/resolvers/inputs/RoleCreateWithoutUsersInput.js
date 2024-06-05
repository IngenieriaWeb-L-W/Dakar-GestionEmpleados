"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleCreateWithoutUsersInput = class RoleCreateWithoutUsersInput {
};
exports.RoleCreateWithoutUsersInput = RoleCreateWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateWithoutUsersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateWithoutUsersInput.prototype, "updatedAt", void 0);
exports.RoleCreateWithoutUsersInput = RoleCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateWithoutUsersInput", {})
], RoleCreateWithoutUsersInput);
