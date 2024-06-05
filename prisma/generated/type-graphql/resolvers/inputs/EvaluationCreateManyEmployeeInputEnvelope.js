"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationCreateManyEmployeeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EvaluationCreateManyEmployeeInput_1 = require("../inputs/EvaluationCreateManyEmployeeInput");
let EvaluationCreateManyEmployeeInputEnvelope = class EvaluationCreateManyEmployeeInputEnvelope {
};
exports.EvaluationCreateManyEmployeeInputEnvelope = EvaluationCreateManyEmployeeInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EvaluationCreateManyEmployeeInput_1.EvaluationCreateManyEmployeeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EvaluationCreateManyEmployeeInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EvaluationCreateManyEmployeeInputEnvelope.prototype, "skipDuplicates", void 0);
exports.EvaluationCreateManyEmployeeInputEnvelope = EvaluationCreateManyEmployeeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("EvaluationCreateManyEmployeeInputEnvelope", {})
], EvaluationCreateManyEmployeeInputEnvelope);
