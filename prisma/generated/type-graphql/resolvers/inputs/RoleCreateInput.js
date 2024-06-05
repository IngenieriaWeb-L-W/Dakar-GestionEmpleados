"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedManyWithoutRoleInput_1 = require("../inputs/UserCreateNestedManyWithoutRoleInput");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let RoleCreateInput = class RoleCreateInput {
};
exports.RoleCreateInput = RoleCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RoleCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput)
], RoleCreateInput.prototype, "users", void 0);
exports.RoleCreateInput = RoleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateInput", {})
], RoleCreateInput);
