"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_RoleName = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_RoleName;
(function (Enum_RoleName) {
    Enum_RoleName["ADMIN"] = "ADMIN";
    Enum_RoleName["USER"] = "USER";
})(Enum_RoleName || (exports.Enum_RoleName = Enum_RoleName = {}));
TypeGraphQL.registerEnumType(Enum_RoleName, {
    name: "Enum_RoleName",
    description: undefined,
});
