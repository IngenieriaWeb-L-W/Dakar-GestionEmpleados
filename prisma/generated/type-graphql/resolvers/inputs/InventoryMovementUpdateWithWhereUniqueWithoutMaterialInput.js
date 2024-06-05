"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementUpdateWithoutMaterialInput_1 = require("../inputs/InventoryMovementUpdateWithoutMaterialInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = class InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput {
};
exports.InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateWithoutMaterialInput_1.InventoryMovementUpdateWithoutMaterialInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateWithoutMaterialInput_1.InventoryMovementUpdateWithoutMaterialInput)
], InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput.prototype, "data", void 0);
exports.InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput", {})
], InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput);
