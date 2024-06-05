"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateToOneWithWhereWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleUpdateWithoutUsersInput_1 = require("../inputs/RoleUpdateWithoutUsersInput");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleUpdateToOneWithWhereWithoutUsersInput = class RoleUpdateToOneWithWhereWithoutUsersInput {
};
exports.RoleUpdateToOneWithWhereWithoutUsersInput = RoleUpdateToOneWithWhereWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpdateToOneWithWhereWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput)
], RoleUpdateToOneWithWhereWithoutUsersInput.prototype, "data", void 0);
exports.RoleUpdateToOneWithWhereWithoutUsersInput = RoleUpdateToOneWithWhereWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateToOneWithWhereWithoutUsersInput", {})
], RoleUpdateToOneWithWhereWithoutUsersInput);
