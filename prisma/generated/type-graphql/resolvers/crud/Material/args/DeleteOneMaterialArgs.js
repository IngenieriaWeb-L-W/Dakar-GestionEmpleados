"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
let DeleteOneMaterialArgs = class DeleteOneMaterialArgs {
};
exports.DeleteOneMaterialArgs = DeleteOneMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], DeleteOneMaterialArgs.prototype, "where", void 0);
exports.DeleteOneMaterialArgs = DeleteOneMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneMaterialArgs);
