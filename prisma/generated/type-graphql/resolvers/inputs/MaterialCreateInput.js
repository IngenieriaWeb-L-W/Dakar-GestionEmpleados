"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateNestedManyWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateNestedManyWithoutMaterialInput");
const UserCreateNestedOneWithoutMaterialsInput_1 = require("../inputs/UserCreateNestedOneWithoutMaterialsInput");
let MaterialCreateInput = class MaterialCreateInput {
};
exports.MaterialCreateInput = MaterialCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialCreateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMaterialsInput_1.UserCreateNestedOneWithoutMaterialsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMaterialsInput_1.UserCreateNestedOneWithoutMaterialsInput)
], MaterialCreateInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateNestedManyWithoutMaterialInput_1.InventoryMovementCreateNestedManyWithoutMaterialInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateNestedManyWithoutMaterialInput_1.InventoryMovementCreateNestedManyWithoutMaterialInput)
], MaterialCreateInput.prototype, "movements", void 0);
exports.MaterialCreateInput = MaterialCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateInput", {})
], MaterialCreateInput);
