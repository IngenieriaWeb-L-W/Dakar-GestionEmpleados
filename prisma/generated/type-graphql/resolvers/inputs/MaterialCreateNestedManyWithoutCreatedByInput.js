"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateNestedManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateManyCreatedByInputEnvelope_1 = require("../inputs/MaterialCreateManyCreatedByInputEnvelope");
const MaterialCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/MaterialCreateOrConnectWithoutCreatedByInput");
const MaterialCreateWithoutCreatedByInput_1 = require("../inputs/MaterialCreateWithoutCreatedByInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialCreateNestedManyWithoutCreatedByInput = class MaterialCreateNestedManyWithoutCreatedByInput {
};
exports.MaterialCreateNestedManyWithoutCreatedByInput = MaterialCreateNestedManyWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateWithoutCreatedByInput_1.MaterialCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateOrConnectWithoutCreatedByInput_1.MaterialCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateManyCreatedByInputEnvelope_1.MaterialCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateManyCreatedByInputEnvelope_1.MaterialCreateManyCreatedByInputEnvelope)
], MaterialCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialWhereUniqueInput_1.MaterialWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
exports.MaterialCreateNestedManyWithoutCreatedByInput = MaterialCreateNestedManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateNestedManyWithoutCreatedByInput", {})
], MaterialCreateNestedManyWithoutCreatedByInput);
