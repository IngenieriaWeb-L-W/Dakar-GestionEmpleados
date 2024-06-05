"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersInput_1 = require("../inputs/RoleUpdateWithoutUsersInput");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleUpsertWithoutUsersInput = class RoleUpsertWithoutUsersInput {
};
exports.RoleUpsertWithoutUsersInput = RoleUpsertWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput)
], RoleUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpsertWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpsertWithoutUsersInput.prototype, "where", void 0);
exports.RoleUpsertWithoutUsersInput = RoleUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpsertWithoutUsersInput", {})
], RoleUpsertWithoutUsersInput);
