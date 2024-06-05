"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateOneRequiredWithoutMovementsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateOrConnectWithoutMovementsInput_1 = require("../inputs/MaterialCreateOrConnectWithoutMovementsInput");
const MaterialCreateWithoutMovementsInput_1 = require("../inputs/MaterialCreateWithoutMovementsInput");
const MaterialUpdateToOneWithWhereWithoutMovementsInput_1 = require("../inputs/MaterialUpdateToOneWithWhereWithoutMovementsInput");
const MaterialUpsertWithoutMovementsInput_1 = require("../inputs/MaterialUpsertWithoutMovementsInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialUpdateOneRequiredWithoutMovementsNestedInput = class MaterialUpdateOneRequiredWithoutMovementsNestedInput {
};
exports.MaterialUpdateOneRequiredWithoutMovementsNestedInput = MaterialUpdateOneRequiredWithoutMovementsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput)
], MaterialUpdateOneRequiredWithoutMovementsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateOrConnectWithoutMovementsInput_1.MaterialCreateOrConnectWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateOrConnectWithoutMovementsInput_1.MaterialCreateOrConnectWithoutMovementsInput)
], MaterialUpdateOneRequiredWithoutMovementsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpsertWithoutMovementsInput_1.MaterialUpsertWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialUpsertWithoutMovementsInput_1.MaterialUpsertWithoutMovementsInput)
], MaterialUpdateOneRequiredWithoutMovementsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialUpdateOneRequiredWithoutMovementsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateToOneWithWhereWithoutMovementsInput_1.MaterialUpdateToOneWithWhereWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialUpdateToOneWithWhereWithoutMovementsInput_1.MaterialUpdateToOneWithWhereWithoutMovementsInput)
], MaterialUpdateOneRequiredWithoutMovementsNestedInput.prototype, "update", void 0);
exports.MaterialUpdateOneRequiredWithoutMovementsNestedInput = MaterialUpdateOneRequiredWithoutMovementsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialUpdateOneRequiredWithoutMovementsNestedInput", {})
], MaterialUpdateOneRequiredWithoutMovementsNestedInput);
