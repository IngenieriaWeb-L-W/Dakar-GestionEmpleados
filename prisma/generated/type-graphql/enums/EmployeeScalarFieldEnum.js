"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EmployeeScalarFieldEnum;
(function (EmployeeScalarFieldEnum) {
    EmployeeScalarFieldEnum["id"] = "id";
    EmployeeScalarFieldEnum["firstName"] = "firstName";
    EmployeeScalarFieldEnum["lastName"] = "lastName";
    EmployeeScalarFieldEnum["email"] = "email";
    EmployeeScalarFieldEnum["hireDate"] = "hireDate";
    EmployeeScalarFieldEnum["position"] = "position";
    EmployeeScalarFieldEnum["department"] = "department";
    EmployeeScalarFieldEnum["salary"] = "salary";
    EmployeeScalarFieldEnum["hoursWorked"] = "hoursWorked";
    EmployeeScalarFieldEnum["createdAt"] = "createdAt";
    EmployeeScalarFieldEnum["updatedAt"] = "updatedAt";
})(EmployeeScalarFieldEnum || (exports.EmployeeScalarFieldEnum = EmployeeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EmployeeScalarFieldEnum, {
    name: "EmployeeScalarFieldEnum",
    description: undefined,
});
