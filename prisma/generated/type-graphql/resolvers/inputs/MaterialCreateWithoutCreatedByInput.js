"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateNestedManyWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateNestedManyWithoutMaterialInput");
let MaterialCreateWithoutCreatedByInput = class MaterialCreateWithoutCreatedByInput {
};
exports.MaterialCreateWithoutCreatedByInput = MaterialCreateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateWithoutCreatedByInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialCreateWithoutCreatedByInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateWithoutCreatedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateWithoutCreatedByInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateNestedManyWithoutMaterialInput_1.InventoryMovementCreateNestedManyWithoutMaterialInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateNestedManyWithoutMaterialInput_1.InventoryMovementCreateNestedManyWithoutMaterialInput)
], MaterialCreateWithoutCreatedByInput.prototype, "movements", void 0);
exports.MaterialCreateWithoutCreatedByInput = MaterialCreateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateWithoutCreatedByInput", {})
], MaterialCreateWithoutCreatedByInput);
