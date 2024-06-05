"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementScalarWhereInput_1 = require("../inputs/InventoryMovementScalarWhereInput");
const InventoryMovementUpdateManyMutationInput_1 = require("../inputs/InventoryMovementUpdateManyMutationInput");
let InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = class InventoryMovementUpdateManyWithWhereWithoutCreatedByInput {
};
exports.InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = InventoryMovementUpdateManyWithWhereWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput)
], InventoryMovementUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateManyMutationInput_1.InventoryMovementUpdateManyMutationInput)
], InventoryMovementUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
exports.InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateManyWithWhereWithoutCreatedByInput", {})
], InventoryMovementUpdateManyWithWhereWithoutCreatedByInput);
