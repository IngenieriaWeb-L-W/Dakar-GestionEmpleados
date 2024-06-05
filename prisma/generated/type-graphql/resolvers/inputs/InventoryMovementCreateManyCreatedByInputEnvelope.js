"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateManyCreatedByInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyCreatedByInput_1 = require("../inputs/InventoryMovementCreateManyCreatedByInput");
let InventoryMovementCreateManyCreatedByInputEnvelope = class InventoryMovementCreateManyCreatedByInputEnvelope {
};
exports.InventoryMovementCreateManyCreatedByInputEnvelope = InventoryMovementCreateManyCreatedByInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateManyCreatedByInput_1.InventoryMovementCreateManyCreatedByInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateManyCreatedByInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InventoryMovementCreateManyCreatedByInputEnvelope.prototype, "skipDuplicates", void 0);
exports.InventoryMovementCreateManyCreatedByInputEnvelope = InventoryMovementCreateManyCreatedByInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateManyCreatedByInputEnvelope", {})
], InventoryMovementCreateManyCreatedByInputEnvelope);
