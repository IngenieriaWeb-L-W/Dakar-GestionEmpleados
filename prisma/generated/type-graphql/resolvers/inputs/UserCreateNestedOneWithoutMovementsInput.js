"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMovementsInput_1 = require("../inputs/UserCreateOrConnectWithoutMovementsInput");
const UserCreateWithoutMovementsInput_1 = require("../inputs/UserCreateWithoutMovementsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMovementsInput = class UserCreateNestedOneWithoutMovementsInput {
};
exports.UserCreateNestedOneWithoutMovementsInput = UserCreateNestedOneWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMovementsInput_1.UserCreateWithoutMovementsInput)
], UserCreateNestedOneWithoutMovementsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovementsInput_1.UserCreateOrConnectWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMovementsInput_1.UserCreateOrConnectWithoutMovementsInput)
], UserCreateNestedOneWithoutMovementsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMovementsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutMovementsInput = UserCreateNestedOneWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMovementsInput", {})
], UserCreateNestedOneWithoutMovementsInput);
