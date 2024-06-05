"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateManyCreatedByInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateManyCreatedByInput_1 = require("../inputs/MaterialCreateManyCreatedByInput");
let MaterialCreateManyCreatedByInputEnvelope = class MaterialCreateManyCreatedByInputEnvelope {
};
exports.MaterialCreateManyCreatedByInputEnvelope = MaterialCreateManyCreatedByInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateManyCreatedByInput_1.MaterialCreateManyCreatedByInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MaterialCreateManyCreatedByInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MaterialCreateManyCreatedByInputEnvelope.prototype, "skipDuplicates", void 0);
exports.MaterialCreateManyCreatedByInputEnvelope = MaterialCreateManyCreatedByInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateManyCreatedByInputEnvelope", {})
], MaterialCreateManyCreatedByInputEnvelope);
