"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateWithoutMaterialInput");
const InventoryMovementUpdateWithoutMaterialInput_1 = require("../inputs/InventoryMovementUpdateWithoutMaterialInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = class InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput {
};
exports.InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput)
], InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementUpdateWithoutMaterialInput_1.InventoryMovementUpdateWithoutMaterialInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementUpdateWithoutMaterialInput_1.InventoryMovementUpdateWithoutMaterialInput)
], InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput)
], InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput.prototype, "create", void 0);
exports.InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput", {})
], InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput);
