"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateManyWithWhereWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialScalarWhereInput_1 = require("../inputs/MaterialScalarWhereInput");
const MaterialUpdateManyMutationInput_1 = require("../inputs/MaterialUpdateManyMutationInput");
let MaterialUpdateManyWithWhereWithoutCreatedByInput = class MaterialUpdateManyWithWhereWithoutCreatedByInput {
};
exports.MaterialUpdateManyWithWhereWithoutCreatedByInput = MaterialUpdateManyWithWhereWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialScalarWhereInput_1.MaterialScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialScalarWhereInput_1.MaterialScalarWhereInput)
], MaterialUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateManyMutationInput_1.MaterialUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateManyMutationInput_1.MaterialUpdateManyMutationInput)
], MaterialUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
exports.MaterialUpdateManyWithWhereWithoutCreatedByInput = MaterialUpdateManyWithWhereWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateManyWithWhereWithoutCreatedByInput", {})
], MaterialUpdateManyWithWhereWithoutCreatedByInput);
