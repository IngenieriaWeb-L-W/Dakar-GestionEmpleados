"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialUpdateWithoutCreatedByInput_1 = require("../inputs/MaterialUpdateWithoutCreatedByInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialUpdateWithWhereUniqueWithoutCreatedByInput = class MaterialUpdateWithWhereUniqueWithoutCreatedByInput {
};
exports.MaterialUpdateWithWhereUniqueWithoutCreatedByInput = MaterialUpdateWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateWithoutCreatedByInput_1.MaterialUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateWithoutCreatedByInput_1.MaterialUpdateWithoutCreatedByInput)
], MaterialUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
exports.MaterialUpdateWithWhereUniqueWithoutCreatedByInput = MaterialUpdateWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateWithWhereUniqueWithoutCreatedByInput", {})
], MaterialUpdateWithWhereUniqueWithoutCreatedByInput);
