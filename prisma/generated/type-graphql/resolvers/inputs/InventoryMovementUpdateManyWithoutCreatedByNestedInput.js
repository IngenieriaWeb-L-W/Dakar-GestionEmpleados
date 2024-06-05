"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateManyWithoutCreatedByNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyCreatedByInputEnvelope_1 = require("../inputs/InventoryMovementCreateManyCreatedByInputEnvelope");
const InventoryMovementCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateOrConnectWithoutCreatedByInput");
const InventoryMovementCreateWithoutCreatedByInput_1 = require("../inputs/InventoryMovementCreateWithoutCreatedByInput");
const InventoryMovementScalarWhereInput_1 = require("../inputs/InventoryMovementScalarWhereInput");
const InventoryMovementUpdateManyWithWhereWithoutCreatedByInput_1 = require("../inputs/InventoryMovementUpdateManyWithWhereWithoutCreatedByInput");
const InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput");
const InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpdateManyWithoutCreatedByNestedInput = class InventoryMovementUpdateManyWithoutCreatedByNestedInput {
};
exports.InventoryMovementUpdateManyWithoutCreatedByNestedInput = InventoryMovementUpdateManyWithoutCreatedByNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateWithoutCreatedByInput_1.InventoryMovementCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateOrConnectWithoutCreatedByInput_1.InventoryMovementCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput_1.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateManyCreatedByInputEnvelope_1.InventoryMovementCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateManyCreatedByInputEnvelope_1.InventoryMovementCreateManyCreatedByInputEnvelope)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput_1.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpdateManyWithWhereWithoutCreatedByInput_1.InventoryMovementUpdateManyWithWhereWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
exports.InventoryMovementUpdateManyWithoutCreatedByNestedInput = InventoryMovementUpdateManyWithoutCreatedByNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateManyWithoutCreatedByNestedInput", {})
], InventoryMovementUpdateManyWithoutCreatedByNestedInput);
