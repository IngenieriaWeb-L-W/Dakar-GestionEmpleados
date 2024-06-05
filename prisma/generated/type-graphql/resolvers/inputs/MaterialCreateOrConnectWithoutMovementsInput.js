"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateOrConnectWithoutMovementsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateWithoutMovementsInput_1 = require("../inputs/MaterialCreateWithoutMovementsInput");
const MaterialWhereUniqueInput_1 = require("../inputs/MaterialWhereUniqueInput");
let MaterialCreateOrConnectWithoutMovementsInput = class MaterialCreateOrConnectWithoutMovementsInput {
};
exports.MaterialCreateOrConnectWithoutMovementsInput = MaterialCreateOrConnectWithoutMovementsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], MaterialCreateOrConnectWithoutMovementsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateWithoutMovementsInput_1.MaterialCreateWithoutMovementsInput)
], MaterialCreateOrConnectWithoutMovementsInput.prototype, "create", void 0);
exports.MaterialCreateOrConnectWithoutMovementsInput = MaterialCreateOrConnectWithoutMovementsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialCreateOrConnectWithoutMovementsInput", {})
], MaterialCreateOrConnectWithoutMovementsInput);
