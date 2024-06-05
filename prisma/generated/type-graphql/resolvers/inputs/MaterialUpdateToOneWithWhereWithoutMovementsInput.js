"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateToOneWithWhereWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialUpdateWithoutMovementsInput_1 = require("../inputs/MaterialUpdateWithoutMovementsInput");
const MaterialWhereInput_1 = require("../inputs/MaterialWhereInput");
let MaterialUpdateToOneWithWhereWithoutMovementsInput = class MaterialUpdateToOneWithWhereWithoutMovementsInput {
};
exports.MaterialUpdateToOneWithWhereWithoutMovementsInput = MaterialUpdateToOneWithWhereWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialUpdateToOneWithWhereWithoutMovementsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateWithoutMovementsInput_1.MaterialUpdateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateWithoutMovementsInput_1.MaterialUpdateWithoutMovementsInput)
], MaterialUpdateToOneWithWhereWithoutMovementsInput.prototype, "data", void 0);
exports.MaterialUpdateToOneWithWhereWithoutMovementsInput = MaterialUpdateToOneWithWhereWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateToOneWithWhereWithoutMovementsInput", {})
], MaterialUpdateToOneWithWhereWithoutMovementsInput);
