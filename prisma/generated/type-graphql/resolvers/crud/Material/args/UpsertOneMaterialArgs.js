"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMaterialArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCreateInput_1 = require("../../../inputs/MaterialCreateInput");
const MaterialUpdateInput_1 = require("../../../inputs/MaterialUpdateInput");
const MaterialWhereUniqueInput_1 = require("../../../inputs/MaterialWhereUniqueInput");
let UpsertOneMaterialArgs = class UpsertOneMaterialArgs {
};
exports.UpsertOneMaterialArgs = UpsertOneMaterialArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialWhereUniqueInput_1.MaterialWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialWhereUniqueInput_1.MaterialWhereUniqueInput)
], UpsertOneMaterialArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialCreateInput_1.MaterialCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialCreateInput_1.MaterialCreateInput)
], UpsertOneMaterialArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MaterialUpdateInput_1.MaterialUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MaterialUpdateInput_1.MaterialUpdateInput)
], UpsertOneMaterialArgs.prototype, "update", void 0);
exports.UpsertOneMaterialArgs = UpsertOneMaterialArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMaterialArgs);
