"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InventoryMovementScalarFieldEnum;
(function (InventoryMovementScalarFieldEnum) {
    InventoryMovementScalarFieldEnum["id"] = "id";
    InventoryMovementScalarFieldEnum["movementType"] = "movementType";
    InventoryMovementScalarFieldEnum["quantity"] = "quantity";
    InventoryMovementScalarFieldEnum["materialId"] = "materialId";
    InventoryMovementScalarFieldEnum["userId"] = "userId";
})(InventoryMovementScalarFieldEnum || (exports.InventoryMovementScalarFieldEnum = InventoryMovementScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InventoryMovementScalarFieldEnum, {
    name: "InventoryMovementScalarFieldEnum",
    description: undefined,
});
