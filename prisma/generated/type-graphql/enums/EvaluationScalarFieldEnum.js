"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EvaluationScalarFieldEnum;
(function (EvaluationScalarFieldEnum) {
    EvaluationScalarFieldEnum["id"] = "id";
    EvaluationScalarFieldEnum["employeeId"] = "employeeId";
    EvaluationScalarFieldEnum["performance"] = "performance";
    EvaluationScalarFieldEnum["comments"] = "comments";
    EvaluationScalarFieldEnum["createdAt"] = "createdAt";
    EvaluationScalarFieldEnum["updatedAt"] = "updatedAt";
})(EvaluationScalarFieldEnum || (exports.EvaluationScalarFieldEnum = EvaluationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EvaluationScalarFieldEnum, {
    name: "EvaluationScalarFieldEnum",
    description: undefined,
});
