"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MaterialScalarFieldEnum;
(function (MaterialScalarFieldEnum) {
    MaterialScalarFieldEnum["id"] = "id";
    MaterialScalarFieldEnum["name"] = "name";
    MaterialScalarFieldEnum["quantity"] = "quantity";
    MaterialScalarFieldEnum["userId"] = "userId";
    MaterialScalarFieldEnum["createdAt"] = "createdAt";
    MaterialScalarFieldEnum["updatedAt"] = "updatedAt";
})(MaterialScalarFieldEnum || (exports.MaterialScalarFieldEnum = MaterialScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MaterialScalarFieldEnum, {
    name: "MaterialScalarFieldEnum",
    description: undefined,
});
