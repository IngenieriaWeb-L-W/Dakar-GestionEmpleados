"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereInput_1 = require("../../../inputs/MaterialWhereInput");
let DeleteManyMaterialArgs = class DeleteManyMaterialArgs {
};
exports.DeleteManyMaterialArgs = DeleteManyMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], DeleteManyMaterialArgs.prototype, "where", void 0);
exports.DeleteManyMaterialArgs = DeleteManyMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMaterialArgs);
