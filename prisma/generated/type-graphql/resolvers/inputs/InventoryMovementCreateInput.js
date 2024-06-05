"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateNestedOneWithoutMovementsInput_1 = require("../inputs/MaterialCreateNestedOneWithoutMovementsInput");
const UserCreateNestedOneWithoutMovementsInput_1 = require("../inputs/UserCreateNestedOneWithoutMovementsInput");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementCreateInput = class InventoryMovementCreateInput {
};
exports.InventoryMovementCreateInput = InventoryMovementCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCreateInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateNestedOneWithoutMovementsInput_1.MaterialCreateNestedOneWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateNestedOneWithoutMovementsInput_1.MaterialCreateNestedOneWithoutMovementsInput)
], InventoryMovementCreateInput.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMovementsInput_1.UserCreateNestedOneWithoutMovementsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMovementsInput_1.UserCreateNestedOneWithoutMovementsInput)
], InventoryMovementCreateInput.prototype, "createdBy", void 0);
exports.InventoryMovementCreateInput = InventoryMovementCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateInput", {})
], InventoryMovementCreateInput);
