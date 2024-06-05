"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialOrderByWithRelationInput_1 = require("../../../inputs/MaterialOrderByWithRelationInput");
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
let AggregateMaterialArgs = class AggregateMaterialArgs {
};
exports.AggregateMaterialArgs = AggregateMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], AggregateMaterialArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialOrderByWithRelationInput_1.MaterialOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMaterialArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], AggregateMaterialArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMaterialArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMaterialArgs.prototype, "skip", void 0);
exports.AggregateMaterialArgs = AggregateMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMaterialArgs);
