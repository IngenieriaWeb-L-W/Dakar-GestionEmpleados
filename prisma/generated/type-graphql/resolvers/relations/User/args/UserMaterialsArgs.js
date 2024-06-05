"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMaterialsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialOrderByWithRelationInput_1 = require("../../../inputs/MaterialOrderByWithRelationInput");
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
const MaterialScalarFieldEnum_1 = require("../../../../enums/MaterialScalarFieldEnum");
let UserMaterialsArgs = class UserMaterialsArgs {
};
exports.UserMaterialsArgs = UserMaterialsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], UserMaterialsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialOrderByWithRelationInput_1.MaterialOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserMaterialsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], UserMaterialsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserMaterialsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserMaterialsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialScalarFieldEnum_1.MaterialScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserMaterialsArgs.prototype, "distinct", void 0);
exports.UserMaterialsArgs = UserMaterialsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserMaterialsArgs);
