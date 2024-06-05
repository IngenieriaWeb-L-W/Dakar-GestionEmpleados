"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementUpdateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementUpdateWithoutCreatedByInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = class InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput {
};
exports.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateWithoutCreatedByInput_1.InventoryMovementUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateWithoutCreatedByInput_1.InventoryMovementUpdateWithoutCreatedByInput)
], InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
exports.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput", {})
], InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput);
