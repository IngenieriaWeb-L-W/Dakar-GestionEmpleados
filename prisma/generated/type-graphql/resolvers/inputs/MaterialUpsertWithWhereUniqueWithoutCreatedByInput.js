"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpsertWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateWithoutCreatedByInput_1 = require("../inputs/MaterialCreateWithoutCreatedByInput");
const MaterialUpdateWithoutCreatedByInput_1 = require("../inputs/MaterialUpdateWithoutCreatedByInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialUpsertWithWhereUniqueWithoutCreatedByInput = class MaterialUpsertWithWhereUniqueWithoutCreatedByInput {
};
exports.MaterialUpsertWithWhereUniqueWithoutCreatedByInput = MaterialUpsertWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateWithoutCreatedByInput_1.MaterialUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateWithoutCreatedByInput_1.MaterialUpdateWithoutCreatedByInput)
], MaterialUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput)
], MaterialUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "create", void 0);
exports.MaterialUpsertWithWhereUniqueWithoutCreatedByInput = MaterialUpsertWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpsertWithWhereUniqueWithoutCreatedByInput", {})
], MaterialUpsertWithWhereUniqueWithoutCreatedByInput);
