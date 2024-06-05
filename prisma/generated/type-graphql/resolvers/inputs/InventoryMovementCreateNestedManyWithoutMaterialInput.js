"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateNestedManyWithoutMaterialInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyMaterialInputEnvelope_1 = require("../inputs/InventoryMovementCreateManyMaterialInputEnvelope");
const InventoryMovementCreateOrConnectWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateOrConnectWithoutMaterialInput");
const InventoryMovementCreateWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateWithoutMaterialInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementCreateNestedManyWithoutMaterialInput = class InventoryMovementCreateNestedManyWithoutMaterialInput {
};
exports.InventoryMovementCreateNestedManyWithoutMaterialInput = InventoryMovementCreateNestedManyWithoutMaterialInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutMaterialInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateOrConnectWithoutMaterialInput_1.InventoryMovementCreateOrConnectWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutMaterialInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateManyMaterialInputEnvelope_1.InventoryMovementCreateManyMaterialInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateManyMaterialInputEnvelope_1.InventoryMovementCreateManyMaterialInputEnvelope)
], InventoryMovementCreateNestedManyWithoutMaterialInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutMaterialInput.prototype, "connect", void 0);
exports.InventoryMovementCreateNestedManyWithoutMaterialInput = InventoryMovementCreateNestedManyWithoutMaterialInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateNestedManyWithoutMaterialInput", {})
], InventoryMovementCreateNestedManyWithoutMaterialInput);
