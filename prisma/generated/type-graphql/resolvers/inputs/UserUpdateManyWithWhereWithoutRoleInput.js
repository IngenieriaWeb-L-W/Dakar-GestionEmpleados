"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutRoleInput = class UserUpdateManyWithWhereWithoutRoleInput {
};
exports.UserUpdateManyWithWhereWithoutRoleInput = UserUpdateManyWithWhereWithoutRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutRoleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutRoleInput.prototype, "data", void 0);
exports.UserUpdateManyWithWhereWithoutRoleInput = UserUpdateManyWithWhereWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutRoleInput", {})
], UserUpdateManyWithWhereWithoutRoleInput);
