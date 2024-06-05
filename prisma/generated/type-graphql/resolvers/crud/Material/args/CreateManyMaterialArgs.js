"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateManyInput_1 = require("../../../inputs/MaterialCreateManyInput");
let CreateManyMaterialArgs = class CreateManyMaterialArgs {
};
exports.CreateManyMaterialArgs = CreateManyMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MaterialCreateManyInput_1.MaterialCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMaterialArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMaterialArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyMaterialArgs = CreateManyMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMaterialArgs);
