"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_MovementType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_MovementType;
(function (Enum_MovementType) {
    Enum_MovementType["ENTRADA"] = "ENTRADA";
    Enum_MovementType["SALIDA"] = "SALIDA";
})(Enum_MovementType || (exports.Enum_MovementType = Enum_MovementType = {}));
TypeGraphQL.registerEnumType(Enum_MovementType, {
    name: "Enum_MovementType",
    description: undefined,
});
