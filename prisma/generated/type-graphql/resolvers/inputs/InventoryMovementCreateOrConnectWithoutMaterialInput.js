"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateOrConnectWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateWithoutMaterialInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementCreateOrConnectWithoutMaterialInput = class InventoryMovementCreateOrConnectWithoutMaterialInput {
};
exports.InventoryMovementCreateOrConnectWithoutMaterialInput = InventoryMovementCreateOrConnectWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementCreateOrConnectWithoutMaterialInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput)
], InventoryMovementCreateOrConnectWithoutMaterialInput.prototype, "create", void 0);
exports.InventoryMovementCreateOrConnectWithoutMaterialInput = InventoryMovementCreateOrConnectWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateOrConnectWithoutMaterialInput", {})
], InventoryMovementCreateOrConnectWithoutMaterialInput);
