"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyRoleInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyRoleInput_1 = require("../inputs/UserCreateManyRoleInput");
let UserCreateManyRoleInputEnvelope = class UserCreateManyRoleInputEnvelope {
};
exports.UserCreateManyRoleInputEnvelope = UserCreateManyRoleInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyRoleInput_1.UserCreateManyRoleInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateManyRoleInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateManyRoleInputEnvelope.prototype, "skipDuplicates", void 0);
exports.UserCreateManyRoleInputEnvelope = UserCreateManyRoleInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyRoleInputEnvelope", {})
], UserCreateManyRoleInputEnvelope);
