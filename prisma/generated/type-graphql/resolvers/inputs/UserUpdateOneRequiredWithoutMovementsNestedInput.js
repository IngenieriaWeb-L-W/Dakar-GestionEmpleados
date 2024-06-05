"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMovementsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMovementsInput_1 = require("../inputs/UserCreateOrConnectWithoutMovementsInput");
const UserCreateWithoutMovementsInput_1 = require("../inputs/UserCreateWithoutMovementsInput");
const UserUpdateToOneWithWhereWithoutMovementsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutMovementsInput");
const UserUpsertWithoutMovementsInput_1 = require("../inputs/UserUpsertWithoutMovementsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMovementsNestedInput = class UserUpdateOneRequiredWithoutMovementsNestedInput {
};
exports.UserUpdateOneRequiredWithoutMovementsNestedInput = UserUpdateOneRequiredWithoutMovementsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput)
], UserUpdateOneRequiredWithoutMovementsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovementsInput_1.UserCreateOrConnectWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMovementsInput_1.UserCreateOrConnectWithoutMovementsInput)
], UserUpdateOneRequiredWithoutMovementsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutMovementsInput_1.UserUpsertWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutMovementsInput_1.UserUpsertWithoutMovementsInput)
], UserUpdateOneRequiredWithoutMovementsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMovementsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutMovementsInput_1.UserUpdateToOneWithWhereWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutMovementsInput_1.UserUpdateToOneWithWhereWithoutMovementsInput)
], UserUpdateOneRequiredWithoutMovementsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutMovementsNestedInput = UserUpdateOneRequiredWithoutMovementsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMovementsNestedInput", {})
], UserUpdateOneRequiredWithoutMovementsNestedInput);
