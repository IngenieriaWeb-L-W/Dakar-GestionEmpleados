"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationWhereInput_1 = require("../inputs/EvaluationWhereInput");
let EvaluationListRelationFilter = class EvaluationListRelationFilter {
};
exports.EvaluationListRelationFilter = EvaluationListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], EvaluationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], EvaluationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EvaluationWhereInput_1.EvaluationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EvaluationWhereInput_1.EvaluationWhereInput)
], EvaluationListRelationFilter.prototype, "none", void 0);
exports.EvaluationListRelationFilter = EvaluationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationListRelationFilter", {})
], EvaluationListRelationFilter);
