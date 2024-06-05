"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserAndReturnOutputTypeRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereInput_1 = require("../../inputs/RoleWhereInput");
let CreateManyUserAndReturnOutputTypeRoleArgs = class CreateManyUserAndReturnOutputTypeRoleArgs {
};
exports.CreateManyUserAndReturnOutputTypeRoleArgs = CreateManyUserAndReturnOutputTypeRoleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], CreateManyUserAndReturnOutputTypeRoleArgs.prototype, "where", void 0);
exports.CreateManyUserAndReturnOutputTypeRoleArgs = CreateManyUserAndReturnOutputTypeRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUserAndReturnOutputTypeRoleArgs);
