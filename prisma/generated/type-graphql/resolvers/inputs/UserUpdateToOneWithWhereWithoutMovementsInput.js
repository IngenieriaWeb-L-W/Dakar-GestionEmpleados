"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutMovementsInput_1 = require("../inputs/UserUpdateWithoutMovementsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutMovementsInput = class UserUpdateToOneWithWhereWithoutMovementsInput {
};
exports.UserUpdateToOneWithWhereWithoutMovementsInput = UserUpdateToOneWithWhereWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutMovementsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMovementsInput_1.UserUpdateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMovementsInput_1.UserUpdateWithoutMovementsInput)
], UserUpdateToOneWithWhereWithoutMovementsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutMovementsInput = UserUpdateToOneWithWhereWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutMovementsInput", {})
], UserUpdateToOneWithWhereWithoutMovementsInput);
