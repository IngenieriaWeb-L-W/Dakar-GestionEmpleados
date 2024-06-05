"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateWithoutCreatedByInput");
const InventoryMovementUpdateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementUpdateWithoutCreatedByInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = class InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput {
};
exports.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateWithoutCreatedByInput_1.InventoryMovementUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateWithoutCreatedByInput_1.InventoryMovementUpdateWithoutCreatedByInput)
], InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput)
], InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "create", void 0);
exports.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput", {})
], InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput);
