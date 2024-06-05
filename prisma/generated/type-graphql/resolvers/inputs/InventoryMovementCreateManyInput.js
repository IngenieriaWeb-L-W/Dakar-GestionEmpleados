"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let InventoryMovementCreateManyInput = class InventoryMovementCreateManyInput {
};
exports.InventoryMovementCreateManyInput = InventoryMovementCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyInput.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InventoryMovementCreateManyInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyInput.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMovementCreateManyInput.prototype, "userId", void 0);
exports.InventoryMovementCreateManyInput = InventoryMovementCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMovementCreateManyInput", {})
], InventoryMovementCreateManyInput);
