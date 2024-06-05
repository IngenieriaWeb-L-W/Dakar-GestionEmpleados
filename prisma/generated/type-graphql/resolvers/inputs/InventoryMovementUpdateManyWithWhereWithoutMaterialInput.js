"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateManyWithWhereWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementScalarWhereInput_1 = require("../inputs/InventoryMovementScalarWhereInput");
const InventoryMovementUpdateManyMutationInput_1 = require("../inputs/InventoryMovementUpdateManyMutationInput");
let InventoryMovementUpdateManyWithWhereWithoutMaterialInput = class InventoryMovementUpdateManyWithWhereWithoutMaterialInput {
};
exports.InventoryMovementUpdateManyWithWhereWithoutMaterialInput = InventoryMovementUpdateManyWithWhereWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput)
], InventoryMovementUpdateManyWithWhereWithoutMaterialInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput)
], InventoryMovementUpdateManyWithWhereWithoutMaterialInput.prototype, "data", void 0);
exports.InventoryMovementUpdateManyWithWhereWithoutMaterialInput = InventoryMovementUpdateManyWithWhereWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateManyWithWhereWithoutMaterialInput", {})
], InventoryMovementUpdateManyWithWhereWithoutMaterialInput);
