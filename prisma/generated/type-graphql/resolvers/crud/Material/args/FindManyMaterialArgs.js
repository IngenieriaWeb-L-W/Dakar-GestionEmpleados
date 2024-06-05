"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialOrderByWithRelationInput_1 = require("../../../inputs/MaterialOrderByWithRelationInput");
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
const MaterialScalarFieldEnum_1 = require("../../../../enums/MaterialScalarFieldEnum");
let FindManyMaterialArgs = class FindManyMaterialArgs {
};
exports.FindManyMaterialArgs = FindManyMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], FindManyMaterialArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialOrderByWithRelationInput_1.MaterialOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMaterialArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], FindManyMaterialArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMaterialArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMaterialArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarFieldEnum_1.MaterialScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMaterialArgs.prototype, "distinct", void 0);
exports.FindManyMaterialArgs = FindManyMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMaterialArgs);
