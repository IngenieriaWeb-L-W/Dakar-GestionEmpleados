"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateManyCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MaterialCreateManyCreatedByInput = class MaterialCreateManyCreatedByInput {
};
exports.MaterialCreateManyCreatedByInput = MaterialCreateManyCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateManyCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MaterialCreateManyCreatedByInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MaterialCreateManyCreatedByInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateManyCreatedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MaterialCreateManyCreatedByInput.prototype, "updatedAt", void 0);
exports.MaterialCreateManyCreatedByInput = MaterialCreateManyCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateManyCreatedByInput", {})
], MaterialCreateManyCreatedByInput);
