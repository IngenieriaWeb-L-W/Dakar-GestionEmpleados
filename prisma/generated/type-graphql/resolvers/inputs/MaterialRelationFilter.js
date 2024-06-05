"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereInput_1 = require("../inputs/MaterialWhereInput");
let MaterialRelationFilter = class MaterialRelationFilter {
};
exports.MaterialRelationFilter = MaterialRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialRelationFilter.prototype, "isNot", void 0);
exports.MaterialRelationFilter = MaterialRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialRelationFilter", {})
], MaterialRelationFilter);
