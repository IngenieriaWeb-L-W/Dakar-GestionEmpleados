"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUpdateManyWithoutMaterialNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryMovementCreateManyMaterialInputEnvelope_1 = require("../inputs/InventoryMovementCreateManyMaterialInputEnvelope");
const InventoryMovementCreateOrConnectWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateOrConnectWithoutMaterialInput");
const InventoryMovementCreateWithoutMaterialInput_1 = require("../inputs/InventoryMovementCreateWithoutMaterialInput");
const InventoryMovementScalarWhereInput_1 = require("../inputs/InventoryMovementScalarWhereInput");
const InventoryMovementUpdateManyWithWhereWithoutMaterialInput_1 = require("../inputs/InventoryMovementUpdateManyWithWhereWithoutMaterialInput");
const InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput_1 = require("../inputs/InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput");
const InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput_1 = require("../inputs/InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput");
const InventoryMovementWhereUniqueInput_1 = require("../inputs/InventoryMovementWhereUniqueInput");
let InventoryMovementUpdateManyWithoutMaterialNestedInput = class InventoryMovementUpdateManyWithoutMaterialNestedInput {
};
exports.InventoryMovementUpdateManyWithoutMaterialNestedInput = InventoryMovementUpdateManyWithoutMaterialNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateWithoutMaterialInput_1.InventoryMovementCreateWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementCreateOrConnectWithoutMaterialInput_1.InventoryMovementCreateOrConnectWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput_1.InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMovementCreateManyMaterialInputEnvelope_1.InventoryMovementCreateManyMaterialInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMovementCreateManyMaterialInputEnvelope_1.InventoryMovementCreateManyMaterialInputEnvelope)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementWhereUniqueInput_1.InventoryMovementWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput_1.InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementUpdateManyWithWhereWithoutMaterialInput_1.InventoryMovementUpdateManyWithWhereWithoutMaterialInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryMovementScalarWhereInput_1.InventoryMovementScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryMovementUpdateManyWithoutMaterialNestedInput.prototype, "deleteMany", void 0);
exports.InventoryMovementUpdateManyWithoutMaterialNestedInput = InventoryMovementUpdateManyWithoutMaterialNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementUpdateManyWithoutMaterialNestedInput", {})
], InventoryMovementUpdateManyWithoutMaterialNestedInput);
