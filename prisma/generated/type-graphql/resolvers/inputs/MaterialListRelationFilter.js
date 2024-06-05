"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereInput_1 = require("../inputs/MaterialWhereInput");
let MaterialListRelationFilter = class MaterialListRelationFilter {
};
exports.MaterialListRelationFilter = MaterialListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], MaterialListRelationFilter.prototype, "none", void 0);
exports.MaterialListRelationFilter = MaterialListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MaterialListRelationFilter", {})
], MaterialListRelationFilter);
