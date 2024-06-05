"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutMaterialsInput_1 = require("../inputs/UserCreateNestedOneWithoutMaterialsInput");
let MaterialCreateWithoutMovementsInput = class MaterialCreateWithoutMovementsInput {
};
exports.MaterialCreateWithoutMovementsInput = MaterialCreateWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateWithoutMovementsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateWithoutMovementsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialCreateWithoutMovementsInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateWithoutMovementsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateWithoutMovementsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMaterialsInput_1.UserCreateNestedOneWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMaterialsInput_1.UserCreateNestedOneWithoutMaterialsInput)
], MaterialCreateWithoutMovementsInput.prototype, "createdBy", void 0);
exports.MaterialCreateWithoutMovementsInput = MaterialCreateWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateWithoutMovementsInput", {})
], MaterialCreateWithoutMovementsInput);
