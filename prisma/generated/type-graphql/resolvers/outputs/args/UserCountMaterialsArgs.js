"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountMaterialsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereInput_1 = require("../../inputs/MaterialWhereInput");
let UserCountMaterialsArgs = class UserCountMaterialsArgs {
};
exports.UserCountMaterialsArgs = UserCountMaterialsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereInput_1.MaterialWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MaterialWhereInput_1.MaterialWhereInput)
], UserCountMaterialsArgs.prototype, "where", void 0);
exports.UserCountMaterialsArgs = UserCountMaterialsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountMaterialsArgs);
