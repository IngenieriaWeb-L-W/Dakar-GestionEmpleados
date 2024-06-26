"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RoleScalarFieldEnum;
(function (RoleScalarFieldEnum) {
    RoleScalarFieldEnum["id"] = "id";
    RoleScalarFieldEnum["name"] = "name";
    RoleScalarFieldEnum["createdAt"] = "createdAt";
    RoleScalarFieldEnum["updatedAt"] = "updatedAt";
})(RoleScalarFieldEnum || (exports.RoleScalarFieldEnum = RoleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RoleScalarFieldEnum, {
    name: "RoleScalarFieldEnum",
    description: undefined,
});
