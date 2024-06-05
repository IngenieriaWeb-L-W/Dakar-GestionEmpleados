"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateOrConnectWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateWithoutCreatedByInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementCreateOrConnectWithoutCreatedByInput = class InventoryMovementCreateOrConnectWithoutCreatedByInput {
};
exports.InventoryMovementCreateOrConnectWithoutCreatedByInput = InventoryMovementCreateOrConnectWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementCreateOrConnectWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput)
], InventoryMovementCreateOrConnectWithoutCreatedByInput.prototype, "create", void 0);
exports.InventoryMovementCreateOrConnectWithoutCreatedByInput = InventoryMovementCreateOrConnectWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateOrConnectWithoutCreatedByInput", {})
], InventoryMovementCreateOrConnectWithoutCreatedByInput);
