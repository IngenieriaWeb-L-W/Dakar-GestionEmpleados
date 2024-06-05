"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateInput_1 = require("../../../inputs/MaterialCreateInput");
let CreateOneMaterialArgs = class CreateOneMaterialArgs {
};
exports.CreateOneMaterialArgs = CreateOneMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateInput_1.MaterialCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateInput_1.MaterialCreateInput)
], CreateOneMaterialArgs.prototype, "data", void 0);
exports.CreateOneMaterialArgs = CreateOneMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneMaterialArgs);
