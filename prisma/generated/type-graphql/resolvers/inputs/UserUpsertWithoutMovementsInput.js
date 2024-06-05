"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMovementsInput_1 = require("../inputs/UserCreateWithoutMovementsInput");
const UserUpdateWithoutMovementsInput_1 = require("../inputs/UserUpdateWithoutMovementsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutMovementsInput = class UserUpsertWithoutMovementsInput {
};
exports.UserUpsertWithoutMovementsInput = UserUpsertWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMovementsInput_1.UserUpdateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMovementsInput_1.UserUpdateWithoutMovementsInput)
], UserUpsertWithoutMovementsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput)
], UserUpsertWithoutMovementsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutMovementsInput.prototype, "where", void 0);
exports.UserUpsertWithoutMovementsInput = UserUpsertWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutMovementsInput", {})
], UserUpsertWithoutMovementsInput);
