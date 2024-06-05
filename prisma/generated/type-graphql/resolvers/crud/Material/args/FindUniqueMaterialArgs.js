"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
let FindUniqueMaterialArgs = class FindUniqueMaterialArgs {
};
exports.FindUniqueMaterialArgs = FindUniqueMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], FindUniqueMaterialArgs.prototype, "where", void 0);
exports.FindUniqueMaterialArgs = FindUniqueMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMaterialArgs);
