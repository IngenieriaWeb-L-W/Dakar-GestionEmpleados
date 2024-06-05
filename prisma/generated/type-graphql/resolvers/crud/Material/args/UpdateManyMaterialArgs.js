"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialUpdateManyMutationInput_1 = require("../../../inputs/MaterialUpdateManyMutationInput");
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
let UpdateManyMaterialArgs = class UpdateManyMaterialArgs {
};
exports.UpdateManyMaterialArgs = UpdateManyMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateManyMutationInput_1.MaterialUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateManyMutationInput_1.MaterialUpdateManyMutationInput)
], UpdateManyMaterialArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], UpdateManyMaterialArgs.prototype, "where", void 0);
exports.UpdateManyMaterialArgs = UpdateManyMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMaterialArgs);
