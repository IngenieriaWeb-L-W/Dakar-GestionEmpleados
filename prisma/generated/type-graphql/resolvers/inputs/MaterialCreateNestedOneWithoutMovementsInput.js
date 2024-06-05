"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateNestedOneWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateOrConnectWithoutMovementsInput_1 = require("../inputs/MaterialCreateOrConnectWithoutMovementsInput");
const MaterialCreateWithoutMovementsInput_1 = require("../inputs/MaterialCreateWithoutMovementsInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialCreateNestedOneWithoutMovementsInput = class MaterialCreateNestedOneWithoutMovementsInput {
};
exports.MaterialCreateNestedOneWithoutMovementsInput = MaterialCreateNestedOneWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput)
], MaterialCreateNestedOneWithoutMovementsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateOrConnectWithoutMovementsInput_1.MaterialCreateOrConnectWithoutMovementsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialCreateOrConnectWithoutMovementsInput_1.MaterialCreateOrConnectWithoutMovementsInput)
], MaterialCreateNestedOneWithoutMovementsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialCreateNestedOneWithoutMovementsInput.prototype, "connect", void 0);
exports.MaterialCreateNestedOneWithoutMovementsInput = MaterialCreateNestedOneWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateNestedOneWithoutMovementsInput", {})
], MaterialCreateNestedOneWithoutMovementsInput);
