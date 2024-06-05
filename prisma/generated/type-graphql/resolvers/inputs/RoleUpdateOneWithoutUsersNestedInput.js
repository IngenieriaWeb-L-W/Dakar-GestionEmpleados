"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateOneWithoutUsersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutUsersInput_1 = require("../inputs/RoleCreateOrConnectWithoutUsersInput");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateToOneWithWhereWithoutUsersInput_1 = require("../inputs/RoleUpdateToOneWithWhereWithoutUsersInput");
const RoleUpsertWithoutUsersInput_1 = require("../inputs/RoleUpsertWithoutUsersInput");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneWithoutUsersNestedInput = class RoleUpdateOneWithoutUsersNestedInput {
};
exports.RoleUpdateOneWithoutUsersNestedInput = RoleUpdateOneWithoutUsersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateToOneWithWhereWithoutUsersInput_1.RoleUpdateToOneWithWhereWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateToOneWithWhereWithoutUsersInput_1.RoleUpdateToOneWithWhereWithoutUsersInput)
], RoleUpdateOneWithoutUsersNestedInput.prototype, "update", void 0);
exports.RoleUpdateOneWithoutUsersNestedInput = RoleUpdateOneWithoutUsersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateOneWithoutUsersNestedInput", {})
], RoleUpdateOneWithoutUsersNestedInput);
