"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateManyWithoutCreatedByNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateManyCreatedByInputEnvelope_1 = require("../inputs/MaterialCreateManyCreatedByInputEnvelope");
const MaterialCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/MaterialCreateOrConnectWithoutCreatedByInput");
const MaterialCreateWithoutCreatedByInput_1 = require("../inputs/MaterialCreateWithoutCreatedByInput");
const MaterialScalarWhereInput_1 = require("../inputs/MaterialScalarWhereInput");
const MaterialUpdateManyWithWhereWithoutCreatedByInput_1 = require("../inputs/MaterialUpdateManyWithWhereWithoutCreatedByInput");
const MaterialUpdateWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/MaterialUpdateWithWhereUniqueWithoutCreatedByInput");
const MaterialUpsertWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/MaterialUpsertWithWhereUniqueWithoutCreatedByInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialUpdateManyWithoutCreatedByNestedInput = class MaterialUpdateManyWithoutCreatedByNestedInput {
};
exports.MaterialUpdateManyWithoutCreatedByNestedInput = MaterialUpdateManyWithoutCreatedByNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateOrConnectWithoutCreatedByInput_1.MaterialCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialUpsertWithWhereUniqueWithoutCreatedByInput_1.MaterialUpsertWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateManyCreatedByInputEnvelope_1.MaterialCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateManyCreatedByInputEnvelope_1.MaterialCreateManyCreatedByInputEnvelope)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereUniqueInput_1.MaterialWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereUniqueInput_1.MaterialWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereUniqueInput_1.MaterialWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereUniqueInput_1.MaterialWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialUpdateWithWhereUniqueWithoutCreatedByInput_1.MaterialUpdateWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialUpdateManyWithWhereWithoutCreatedByInput_1.MaterialUpdateManyWithWhereWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarWhereInput_1.MaterialScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
exports.MaterialUpdateManyWithoutCreatedByNestedInput = MaterialUpdateManyWithoutCreatedByNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateManyWithoutCreatedByNestedInput", {})
], MaterialUpdateManyWithoutCreatedByNestedInput);
