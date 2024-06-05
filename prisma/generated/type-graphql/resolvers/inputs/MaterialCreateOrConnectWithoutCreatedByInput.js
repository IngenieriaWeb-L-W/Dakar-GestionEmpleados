"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateOrConnectWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateWithoutCreatedByInput_1 = require("../inputs/MaterialCreateWithoutCreatedByInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialCreateOrConnectWithoutCreatedByInput = class MaterialCreateOrConnectWithoutCreatedByInput {
};
exports.MaterialCreateOrConnectWithoutCreatedByInput = MaterialCreateOrConnectWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialCreateOrConnectWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput)
], MaterialCreateOrConnectWithoutCreatedByInput.prototype, "create", void 0);
exports.MaterialCreateOrConnectWithoutCreatedByInput = MaterialCreateOrConnectWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateOrConnectWithoutCreatedByInput", {})
], MaterialCreateOrConnectWithoutCreatedByInput);
