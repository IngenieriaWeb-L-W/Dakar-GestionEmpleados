"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMovementsInput_1 = require("../inputs/UserCreateWithoutMovementsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMovementsInput = class UserCreateOrConnectWithoutMovementsInput {
};
exports.UserCreateOrConnectWithoutMovementsInput = UserCreateOrConnectWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMovementsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput)
], UserCreateOrConnectWithoutMovementsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutMovementsInput = UserCreateOrConnectWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMovementsInput", {})
], UserCreateOrConnectWithoutMovementsInput);
