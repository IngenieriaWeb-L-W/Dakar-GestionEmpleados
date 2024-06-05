"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialUpdateInput_1 = require("../../../inputs/MaterialUpdateInput");
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
let UpdateOneMaterialArgs = class UpdateOneMaterialArgs {
};
exports.UpdateOneMaterialArgs = UpdateOneMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateInput_1.MaterialUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateInput_1.MaterialUpdateInput)
], UpdateOneMaterialArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], UpdateOneMaterialArgs.prototype, "where", void 0);
exports.UpdateOneMaterialArgs = UpdateOneMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMaterialArgs);
