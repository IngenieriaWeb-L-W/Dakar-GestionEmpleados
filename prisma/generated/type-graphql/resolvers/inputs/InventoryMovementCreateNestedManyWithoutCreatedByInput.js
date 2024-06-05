"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateNestedManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyCreatedByInputEnvelope_1 = require("../inputs/InventoryMovementCreateManyCreatedByInputEnvelope");
const InventoryMovementCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateOrConnectWithoutCreatedByInput");
const InventoryMovementCreateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateWithoutCreatedByInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementCreateNestedManyWithoutCreatedByInput = class InventoryMovementCreateNestedManyWithoutCreatedByInput {
};
exports.InventoryMovementCreateNestedManyWithoutCreatedByInput = InventoryMovementCreateNestedManyWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateOrConnectWithoutCreatedByInput_1.InventoryMovementCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateManyCreatedByInputEnvelope_1.InventoryMovementCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateManyCreatedByInputEnvelope_1.InventoryMovementCreateManyCreatedByInputEnvelope)
], InventoryMovementCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
exports.InventoryMovementCreateNestedManyWithoutCreatedByInput = InventoryMovementCreateNestedManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateNestedManyWithoutCreatedByInput", {})
], InventoryMovementCreateNestedManyWithoutCreatedByInput);
