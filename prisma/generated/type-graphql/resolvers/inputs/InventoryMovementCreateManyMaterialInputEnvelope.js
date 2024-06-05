"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateManyMaterialInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyMaterialInput_1 = require("../inputs/InventoryMovementCreateManyMaterialInput");
let InventoryMovementCreateManyMaterialInputEnvelope = class InventoryMovementCreateManyMaterialInputEnvelope {
};
exports.InventoryMovementCreateManyMaterialInputEnvelope = InventoryMovementCreateManyMaterialInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateManyMaterialInput_1.InventoryMovementCreateManyMaterialInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateManyMaterialInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InventoryMovementCreateManyMaterialInputEnvelope.prototype, "skipDuplicates", void 0);
exports.InventoryMovementCreateManyMaterialInputEnvelope = InventoryMovementCreateManyMaterialInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateManyMaterialInputEnvelope", {})
], InventoryMovementCreateManyMaterialInputEnvelope);
