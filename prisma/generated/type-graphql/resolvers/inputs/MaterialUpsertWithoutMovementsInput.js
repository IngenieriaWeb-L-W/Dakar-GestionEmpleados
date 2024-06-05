"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpsertWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateWithoutMovementsInput_1 = require("../inputs/MaterialCreateWithoutMovementsInput");
const MaterialUpdateWithoutMovementsInput_1 = require("../inputs/MaterialUpdateWithoutMovementsInput");
const MaterialWhereInput_1 = require("../inputs/MaterialWhereInput");
let MaterialUpsertWithoutMovementsInput = class MaterialUpsertWithoutMovementsInput {
};
exports.MaterialUpsertWithoutMovementsInput = MaterialUpsertWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateWithoutMovementsInput_1.MaterialUpdateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateWithoutMovementsInput_1.MaterialUpdateWithoutMovementsInput)
], MaterialUpsertWithoutMovementsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput)
], MaterialUpsertWithoutMovementsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialUpsertWithoutMovementsInput.prototype, "where", void 0);
exports.MaterialUpsertWithoutMovementsInput = MaterialUpsertWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpsertWithoutMovementsInput", {})
], MaterialUpsertWithoutMovementsInput);
